<template>
  <main>
    <div class="socials">
      <SvgSprite />
      <a v-for="{username, href, title, icon} of socials" :href="href + username" :title="title">
        <svg class="icon dib v-top">
          <use :xlink:href="`#${icon}`" />
        </svg>
      </a>
    </div>
  </main>
</template>

<style lang="stylus">
.icon {
  width: 0.75em;
  height: 0.75em;
  margin-right: 1em;
}

:nth-child(2 of .socials a) .icon {
  width: 1.5em;
  height: 1.5em;
}

.icon:hover {
  color: pink;
}
</style>

<script>
import SvgSprite from "./SvgSprite";

export default {
  name: "socials",
  components: {
    SvgSprite,
  },
  data: function () {
    return {
      socials: [
        {
          username: "alterfo",
          href: "https://github.com/",
          title: "GitHub",
          icon: "github",
        },
        {
          username: "alterforia",
          href: "https://soundcloud.com/",
          title: "SoundCloud",
          icon: "soundcloud",
        },
        {
          username: "alexiy-dorkin",
          href: "https://linkedin.com/in/",
          title: "LinkedIn",
          icon: "linkedin",
        },
      ],
    };
  },
};
</script>