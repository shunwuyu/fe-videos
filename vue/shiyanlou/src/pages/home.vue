<template>
  <div id="home_page">
    <NavigationBar />
    <MainNavigation />
    <LouPlus />
    <Boutique />
    <RecentlyRecommendCourse />
    <BaseCourse/>
    <BackendCourse />
    <CloudComputeBigDataCourse/>
    <TrainingCourse />
    <LearningPath />
    <SiteDescription/>
  </div> 
</template>
<script>
import NavigationBar from '@/components/home_page/navigation_bar.vue'
import MainNavigation from '@/components/home_page/main_navigation.vue'
import LouPlus from '@/components/home_page/lou_plus.vue'
import Boutique from '@/components/home_page/boutique_course.vue'
import RecentlyRecommendCourse from '@/components/home_page/recently_recommend_course.vue'
import BackendCourse from '@/components/home_page/backend_course.vue'
import CloudComputeBigDataCourse from '@/components/home_page/cloud_compute_big_data_course.vue'
import LearningPath from '@/components/home_page/learning_path.vue'
import BaseCourse from '@/components/home_page/base_course.vue'
import TrainingCourse from '@/components/home_page/training_course.vue'
import SiteDescription from '@/components/home_page/site_description.vue'

export default {
  components: {
    NavigationBar,
    MainNavigation,
    LouPlus,
    Boutique,
    RecentlyRecommendCourse,
    BackendCourse,
    CloudComputeBigDataCourse,
    LearningPath,
    BaseCourse,
    TrainingCourse,
    SiteDescription
  }
}
</script>
<style>

</style>
