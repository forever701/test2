<template>
    <!-- 头部组件 -->
    <AppHeader />
    <!-- 中间组件 -->
    <!-- 二级路由 -->
    <router-view></router-view>
    <!-- 底部组件 -->
    <AppFooter />

</template>

<script>
import AppHeader from '@/components/app-header.vue';
import AppFooter from '@/components/app-footer.vue';
export default {
    name: 'layout',
    components: {
        AppHeader,
        AppFooter
    }
}
</script>

<style scoped>

</style>