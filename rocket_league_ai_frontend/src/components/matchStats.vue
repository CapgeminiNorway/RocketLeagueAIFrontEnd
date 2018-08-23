<script>
import { HorizontalBar } from 'vue-chartjs';

export default {
  extends: HorizontalBar,
  mounted() {
    this.renderChart({
      labels: ['Shots', 'Shots on target', 'Posession'],
      datasets: [
        {
          label: 'user1',
          backgroundColor: '#FC2525',
          data: [4, 9, 7],
        },
        {
          label: 'user2',
          backgroundColor: '#11abdb',
          data: [5, 6, 3],
        },
      ],
    }, { responsive: true, maintainAspectRatio: false });
  },
};
</script>
