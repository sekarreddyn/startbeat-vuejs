<template>
  <div>
    <Layout/>
    <div class="app-content content">
      <div class="content-wrapper">
        <div class="content-wrapper-before"></div>
        <div class="content-header row">
          <div class="content-header-left col-md-4 col-12 mb-2">
            <h3 class="content-header-title">Post</h3>
          </div>
          <div class="content-header-right col-md-8 col-12">
            <div class="breadcrumbs-top float-md-right">
              <div class="breadcrumb-wrapper mr-1">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a href="index.html">Post</a>
                  </li>
                  <li class="breadcrumb-item">
                    <a href="#">Layouts</a>
                  </li>
                  <li class="breadcrumb-item active">Navigation Light</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div class="content-body">
          <div class="card">
            <h4 class="card-title m-0">Post</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Layout from "../Layout";
export default {
  components: {
    Layout
  }
};
</script>
<style>
</style>