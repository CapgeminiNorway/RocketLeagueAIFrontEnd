import sys, uuid, os
import os.path
import ntpath
import zipfile
import shutil

from azure.storage.blob import BlockBlobService, PublicAccess

from .config import Config


# first submission uploads to 'uploaded-submissions' container by frontend-backend part.
# Backend service watches uploaded container and validates.
# if it passes validation then submission file is moved to processed container and catalog in
# bots folder is updated with latest bot

class SubmissionManager:

    def __init__(self):
        self.config = Config()
        self.block_blob_service = BlockBlobService(account_name=self.config.account_name(), account_key=self.config.account_key())
        # not processed/verified submissions
        self.upload_container = 'uploaded-submissions'
        self.block_blob_service.create_container(self.upload_container)

        # processed submissions
        self.processed_submissions_container = 'processed-submissions'
        self.block_blob_service.create_container(self.processed_submissions_container)

    def get_uploaded_submissions(self):
        return self.block_blob_service.list_blobs(self.upload_container)

    # temp_full_path_filename will be deleted after uploading to blob container
    def upload_submission(self, temp_full_path_filename, remove=False):
        print("upload "+temp_full_path_filename)
        file_name = ntpath.basename(temp_full_path_filename)
        self.block_blob_service.create_blob_from_path(self.upload_container, file_name,
                                                      temp_full_path_filename)
        if remove:
            os.remove(temp_full_path_filename)
        return self.block_blob_service.make_blob_url(self.upload_container, file_name)

    def download_submission(self, file_name):
        blob_url = self.block_blob_service.make_blob_url(self.upload_container, file_name)
        print("download "+blob_url)
        download_file = os.path.join(self.config.bots_test_dir(), file_name)
        self.block_blob_service.get_blob_to_path(self.upload_container, file_name, download_file)
        return download_file

    def move_submission_to_processed(self, file_name):
        blob_url = self.block_blob_service.make_blob_url(self.upload_container, file_name)
        blob_processed_url = self.block_blob_service.make_blob_url(self.processed_submissions_container, file_name)
        print("move submission {} to valid submissions {}".format(blob_url, blob_processed_url) )
        self.block_blob_service.copy_blob(self.processed_submissions_container, file_name, blob_url)
        self.block_blob_service.delete_blob(self.upload_container, file_name)
        self.move_submission_dir(file_name)

    def move_submission_dir(self, file_name):
        bot_test_dir = self.get_test_bot_dir(file_name)
        bot_tournament_dir = self.get_tournament_bot_dir(file_name)
        if os.path.exists(bot_tournament_dir):
            print("delete existing dir "+bot_tournament_dir)
            shutil.rmtree(bot_tournament_dir)
        result = shutil.move(bot_test_dir, self.config.bots_dir())
        print(result)
        print("moved bot dir from {} to {}".format(bot_test_dir, bot_tournament_dir))

    def get_test_bot_dir(self, file_name):
        return os.path.join(self.config.bots_test_dir(), os.path.splitext(file_name)[0])

    def get_tournament_bot_dir(self, file_name):
        return os.path.join(self.config.bots_dir(), os.path.splitext(file_name)[0])

    def extract_submission(self, file_name):
        full_path_to_file = os.path.join(self.config.bots_test_dir(), file_name)
        extract_dir = self.get_test_bot_dir(file_name)
        zip_ref = zipfile.ZipFile(full_path_to_file, 'r')
        zip_ref.extractall(path=extract_dir)
        zip_ref.close()
        return extract_dir

    def get_processed_submissions(self):
        return self.block_blob_service.list_blobs(self.processed_submissions_container)

