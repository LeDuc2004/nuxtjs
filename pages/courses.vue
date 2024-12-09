<script setup>
const { contents } = await getCourses("/courses", { fields: "id,title" });
console.log(contents);
</script>
<template>
  <UTable :data="contents" class="flex-1" />
</template>
