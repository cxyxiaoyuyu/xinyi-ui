<template>
  <table class="gulu-table" :class="classes">
    <colgroup>
      <col :ref="setColRef" v-for="head in thead" :width="head.width ?? head.width" />
    </colgroup>

    <thead>
      <tr>
        <th
          v-for="(head, index) in thead"
          @mousedown="mouseDown($event, index)"
          @mousemove="mouseMove($event, index)"
          @mouseup="mouseUp($event)"
        >
          {{ head.prop ? head.prop : head }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in (data as Array<Array<string>>)">
        <td v-for="item in row">{{ item }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent, ref, onUpdated } from "vue";
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
      default: false,
    },
    border: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const { stripe, border } = props;
    const classes = {
      "gulu-stripe": stripe,
      "gulu-border": border,
    };

    let th = undefined;
    let currentIndex = undefined;

    let colRefs = [];
    const setColRef = (el) => {
      if (el) {
        colRefs.push(el);
      }
    };

    const mouseDown = (e, index) => {
      if (!border) return;
      th = e.target;
      currentIndex = index;

      if (e.offsetX > th.offsetWidth - 10) {
        th.down = true;
        th.oldWidth = th.offsetWidth;
        th.oldX = e.x;
      }
    };

    const mouseMove = (e, index) => {
      if (!border) return;
      if (e.target.offsetWidth - e.offsetX < 10) {
        e.target.style.cursor = "col-resize";
      } else {
        e.target.style.cursor = "default";
      }
      if (!th) {
        th = e.target;
        currentIndex = index;
      }
      if (th.down) {
        // th.width = th.oldWidth + (e.x - th.oldX);
        colRefs[currentIndex].width = th.oldWidth + (e.x - th.oldX);
        th.style.cursor = "col-resize";
      }
    };

    const mouseUp = (e) => {
      if (!border) return;
      if (!th) {
        th = e.target;
        currentIndex = undefined
      }
      th.down = false;
      th.style.cursor = "defult";
    };
    return { classes,setColRef, mouseDown, mouseMove, mouseUp };
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
  td,
  th {
    border-bottom: 1px solid #efecec;
    color: #606266;
    text-align: left;
    padding: 10px 18px;
    line-height: 30px;
  }
  &.gulu-stripe {
    tbody tr:nth-child(even) {
      background: #f8f8f8;
    }
  }
  &.gulu-border {
    td,
    th {
      border: 1px solid #efecec;
    }
  }
}
</style>
