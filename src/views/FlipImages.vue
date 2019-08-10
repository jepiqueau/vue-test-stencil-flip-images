<template>
  <div class="ion-page">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/"></ion-back-button>
        </ion-buttons>
        <ion-title>Flipimages</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <template v-if="this.type === 'l_horizontal'">
        <jeep-flipimages type="horizontal" fpadding="2">
          <img src="@/assets/images/deerl.jpg" alt="deer" />
          <img src="@/assets/images/elephantl.jpg" alt="elephant" />
          <img src="@/assets/images/tigerl.jpg" alt="tiger" />
          <img src="@/assets/images/lionl.jpg" alt="lion" />
          <img src="@/assets/images/eaglel.jpg" alt="eagle" />
          <img src="@/assets/images/eagleheadl.jpg" alt="eagle head" />
        </jeep-flipimages>
      </template>
      <template v-if="this.type === 'l_vertical'">
        <jeep-flipimages type="vertical" fpadding="2">
          <img src="@/assets/images/deerl.jpg" alt="deer" />
          <img src="@/assets/images/elephantl.jpg" alt="elephant" />
          <img src="@/assets/images/tigerl.jpg" alt="tiger" />
          <img src="@/assets/images/lionl.jpg" alt="lion" />
          <img src="@/assets/images/eaglel.jpg" alt="eagle" />
          <img src="@/assets/images/eagleheadl.jpg" alt="eagle head" />
        </jeep-flipimages>
      </template>
      <template v-if="this.type === 'p_horizontal'">
        <jeep-flipimages type="horizontal" fpadding="2">
          <img src="@/assets/images/ara.jpg" alt="ara" />
          <img src="@/assets/images/dog.jpg" alt="dog" />
          <img src="@/assets/images/gorilla.jpg" alt="gorilla" />
          <img src="@/assets/images/lion.jpg" alt="lion" />
          <img src="@/assets/images/penguin.jpg" alt="penguin" />
        </jeep-flipimages>
      </template>
      <template v-if="this.type === 'p_vertical'">
        <jeep-flipimages type="vertical" fpadding="2">
          <img src="@/assets/images/ara.jpg" alt="ara" />
          <img src="@/assets/images/dog.jpg" alt="dog" />
          <img src="@/assets/images/gorilla.jpg" alt="gorilla" />
          <img src="@/assets/images/lion.jpg" alt="lion" />
          <img src="@/assets/images/penguin.jpg" alt="penguin" />
        </jeep-flipimages>
      </template>
    </ion-content>
  </div>
</template>

<script>
export default {
  name: "flipimages",
  data() {
    return {
      type: this.$route.params.type
    };
  }
};
</script>
