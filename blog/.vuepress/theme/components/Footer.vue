<template>
  <footer class="footer">
    <div class="footer-right-wrap">
      <p>{{footerText}}</p>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    footerText() {
      return (this.$themeConfig.footer && this.$themeConfig.footer.text) || "";
    },
  },
};
</script>

<style lang="stylus" scoped>
ol, ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.footer {
  min-height: 60px;
  box-sizing: border-box;
  background-color: $black;
  display: flex;
  padding: 15px 32px;
  color: white;

  .footer-right-wrap {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: $MQNarrow) {
      justify-content: flex-end;
    }

    .copyright {
      display: flex;
      justify-content: flex-end;

      .copyright-item {
        flex: 0 0 auto;
        padding: 0 10px;
        position: relative;
        line-height: 12px;
        border-right: 1px solid $footerColor;

        &:last-child {
          border-right: none;
        }

        a {
          font-size: 12px;
          color: $footerColor;
          text-decoration: none;
          transition: color 0.3s;

          &:hover {
            color: rgba(255, 255, 255, 0.9);
          }
        }
      }
    }
  }
}

@media (max-width: $MQMobile) {
  .footer {
    min-height: 100px;
    flex-direction: column;

    .footer-left-wrap {
      align-items: center;
      justify-content: center;
    }

    .footer-right-wrap {
      .copyright {
        display: block;

        .copyright-item {
          line-height: 1;
          border-right: none;
          text-align: center;
        }
      }
    }
  }
}
</style>