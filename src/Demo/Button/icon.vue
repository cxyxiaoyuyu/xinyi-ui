<demo>图标按钮</demo>

<template>
  <div class="row">
    <x-button icon="search">默认按钮</x-button>
    <x-button icon="edit" type="primary">主要按钮</x-button>
    <x-button icon="menu" type="success">成功按钮</x-button>
    <x-button icon="message" type="info">信息按钮</x-button>
    <x-button icon="star" type="warning">警告按钮</x-button>
    <x-button icon="delete" type="danger">危险按钮</x-button>
  </div>
  <div class="row">
    <x-button round>默认按钮<x-icon icon="search"></x-icon></x-button>
    <x-button round type="primary">主要按钮<x-icon icon="edit"></x-icon></x-button>
    <x-button round type="success">成功按钮<x-icon icon="menu"></x-icon></x-button>
    <x-button round type="info">信息按钮<x-icon icon="message"></x-icon></x-button>
    <x-button round type="warning">警告按钮<x-icon icon="star"></x-icon></x-button>
    <x-button round type="danger">危险按钮<x-icon icon="delete"></x-icon></x-button>
  </div>
  <div>
    <x-button icon="search" circle></x-button>
    <x-button icon="edit" circle type="primary"></x-button>
    <x-button icon="menu" circle type="success"></x-button>
    <x-button icon="message" circle type="info"></x-button>
    <x-button icon="star" circle type="warning"></x-button>
    <x-button icon="delete" circle type="danger"></x-button>
  </div>
</template>

<style>
.row {
  margin-bottom: 20px;
}
</style>
