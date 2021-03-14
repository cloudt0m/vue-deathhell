<template>
  <div>
    <table class="table table-bordered table-sm">
      <thead>
        <tr>
          <th>地圖</th>
          <th>經度</th>
          <th>緯度</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in data.info" :key="index">
          <td>{{ item.map }}</td>
          <td>{{ item.lat }}</td>
          <td>{{ item.lng }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { reactive } from "vue";
import axios from "axios";

export default {
  setup() {
    const data = reactive({
      info: null,
    });

    axios
      .get("api_um.json")
      .then((res) => {
        data.info = res.data;
        console.log(res.data);
      })
      .catch((error) => console.error(error));

    return {
      data,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>