<script>
export default {};
</script>

<template>
  <el-aside style="padding: 20px">
    <el-affix position="top">
      <el-space direction="vertical" :size="60">
        <el-card
          shadow="always"
          :key="n"
          v-for="n in 2"
          style="width: 260px; height: 300px"
        >
          <div v-for="o in 4" :key="o" class="text item">
            {{ "List item " + o }}
          </div>
        </el-card>
      </el-space>
    </el-affix>
  </el-aside>
</template>