<template>
  <table class="gulu-table" :class="classes">

    <colgroup>
      <col v-for="head in thead" :width="head.with ?? head.width">
    </colgroup>

    <thead>
      <tr>
        <th v-for="head in thead">{{ head.prop ? head.prop : head }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in data">
        <td v-for="item in row">{{ item }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "XTable",
  props: {
    thead: {
      type: Array || Object,
    },
    data: {
      type: Array,
    },
    stripe: {
      type: Boolean,
      default: false 
    },
    border: {
      type: Boolean,
      default: false 
    },
    height: {
      type: Number,
    }
  },
  setup(props) {
    const { stripe, border } = props
    const classes =  {
      'gulu-stripe': stripe,
      'gulu-border': border 
    }
    return { classes };
  },
});
</script>

<style lang="scss">
.gulu-table {
  border-collapse: collapse;
  width: 100%;
  tbody tr:hover {
    background: #f7f4f4; 
  }
  td,th {
    border-bottom: 1px solid #efecec; 
    color: #606266;
    text-align: left;
    padding: 10px 18px;
  }
  &.gulu-stripe {
    tbody tr:nth-child(even){
      background: #f8f8f8;
    }
  }
  &.gulu-border {
    td,th {
      border: 1px solid #efecec; 
    } 
  }
}
</style>
