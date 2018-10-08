<template>
  <div id="wovn-languages">
    <ul>
      <li class="wovn-switch" data-value="ja">
        <span>JA</span>
      </li>
      <li class="wovn-switch" data-value="en">
        <span>EN</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TranslationSwitch',
}
</script>

<style lang="scss" scoped>
#wovn-languages {
  ul {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    width: 58px;
    color: $primary-text-color--is-bg-dark;
  }

  li {
    font-size: 18px;
    line-height: 18px;
    list-style: none;
    cursor: pointer;
    transition: opacity 200ms cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  li::after {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    content: "/";
    font-size: 17px;
    line-height: 17px;
  }

  li + li {
  }

  li + li::after {
    content: "";
  }

  li.selected span {
    border-bottom: 1px solid $primary-text-color--is-bg-dark;
  }

  li span:hover {
    opacity: .4;
  }
}
</style>
