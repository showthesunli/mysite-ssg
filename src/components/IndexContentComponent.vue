<template>
  <el-row>
    <el-col :span="18" :offset="3">
      <el-container>
        <el-main>
          <el-row
            :gutter="20"
            :key="n"
            v-for="n in 10"
            style="margin-bottom: 20px"
          >
            <el-col :key="n" v-for="n in 3" :span="8">
              <el-card shadow="hover">
                <template #header>
                  <div class="card-header">
                    <span>Card name</span>
                    <el-button class="button" type="text"
                      >Operation button</el-button
                    >
                  </div>
                </template>
                <div v-for="o in 4" :key="o" class="text item">
                  {{ "List item " + o }}
                </div>
              </el-card>
            </el-col>
          </el-row>
        </el-main>
        <aside-content-ads></aside-content-ads>
      </el-container>
    </el-col>
  </el-row>
</template>

<script>
import AsideContentAds from './AsideContentAds.vue'
export default {
    components:{
        AsideContentAds
    }
}
</script>