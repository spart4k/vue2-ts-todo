<template>
	<div class="user">
    <img :src="user.image" class="user-image" alt="">
		<div class="user-name">
      {{ user.firstName }}
    </div>
    <div class="user-age">
      {{ user.age }}
    </div>
    <div class="user-height">
      {{ user.height }}
    </div>
    <div class="user-birthday">
      {{ user.birthDate }}
    </div>
	</div>
</template>
<script lang="ts" src="./setup"></script>
<style lang="scss" scoped src="./style.scss"></style>