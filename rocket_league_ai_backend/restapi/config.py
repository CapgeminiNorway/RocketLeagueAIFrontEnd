import os.path
import configparser


class Config:
    def __init__(self):
        try:
            self.config = configparser.ConfigParser()
            self.config.read_file(open(os.path.join(os.path.dirname(os.path.abspath(__file__)) + "/rocketleague.cfg")))
        except FileNotFoundError as e:
            print(e)
            print("create file rocketleague.cfg, use rocketleague-template.cfg as example")
            raise

    def account_name(self):
        return self.config["Azure"]["account_name"]

    def account_key(self):
        return self.config["Azure"]["account_key"]

