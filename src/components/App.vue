<template>
    <div class="app">
        <Menu />
        <Header />
        <div class="pages-container">
            <router-view />
        </div>
        <Footer />
    </div>
</template>
<script>
    import Header from '@components/Header';
    import Footer from '@components/Footer';
    import Menu from '@components/Menu';
    export default {
        components: {
            Header,
            Footer,
            Menu
        }
    };
</script>
<style lang="scss" scoped>
    .app {
        position: relative;
        height: 100%;
    }

    .pages-container {
        max-width: 1080px;
        margin: 0 auto;
    }
</style>