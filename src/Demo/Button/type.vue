<demo>主题按钮</demo>

<template>
  <div class="row">
    <x-button>默认按钮</x-button>
    <x-button type="primary">主要按钮</x-button>
    <x-button type="success">成功按钮</x-button>
    <x-button type="info">信息按钮</x-button>
    <x-button type="warning">警告按钮</x-button>
    <x-button type="danger">危险按钮</x-button>
  </div>
  <div class="row">
    <x-button plain>朴素按钮</x-button>
    <x-button plain type="primary">主要按钮</x-button>
    <x-button plain type="success">成功按钮</x-button>
    <x-button plain type="info">信息按钮</x-button>
    <x-button plain type="warning">警告按钮</x-button>
    <x-button plain type="danger">危险按钮</x-button>
  </div>
  <div class="row">
    <x-button round>圆角按钮</x-button>
    <x-button round type="primary">主要按钮</x-button>
    <x-button round type="success">成功按钮</x-button>
    <x-button round type="info">信息按钮</x-button>
    <x-button round type="warning">警告按钮</x-button>
    <x-button round type="danger">危险按钮</x-button>
  </div>
  <div>
    <x-button text>文字按钮</x-button>
    <x-button type="primary" text>主要按钮</x-button>
    <x-button type="success" text>成功按钮</x-button>
    <x-button type="info" text>信息按钮</x-button>
    <x-button type="warning" text>警告按钮</x-button>
    <x-button type="danger" text>危险按钮</x-button>
  </div>
</template>

<style>
.row {
  margin-bottom: 20px;
}
</style>
