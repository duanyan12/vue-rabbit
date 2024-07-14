// 从pinia中导入创建仓库的函数defineStore
import { defineStore } from "pinia";
import { computed, ref } from "vue";

// 导出pinia创建仓库的函数
export const userCounterStore = defineStore(
  "count",
  () => {
    // 定义数据
    const count = ref(1);

    // 定义修改数据的方法
    const increment = () => {
      count.value++;
    };

    // 定义getter
    let doubleCount = computed(() => count.value * 2);

    //   // 发起异步请求
    // const listEmp = ref([{name:'ly'}]);
    //   const getList = async () => {
    //     const res = await axios.get('.....');
    //     listEmp.value = res.data.data;
    //   };

    // 以对象形式返回（外部可以访问）
    return { count, increment, doubleCount };
  },

  { persist: true }
);

