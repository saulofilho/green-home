<template>
  <div id="HowItWorks" class="howItWorks">
    <p class="title container">Simply simple, my friend.</p>
    <div class="features-wrapper container">
      <div class="infos-wrapper">
        <p class="text align-center">
          Really: it's very simple to get acquainted with the app. A few clicks
          and boom: you have a dataset for your harvest. One. Two. Four billion.
          How many you need.
          <br />
          <br />
          Looking to steps:
        </p>
      </div>
    </div>
    <div class="howItWorks-wrapper container">
      <div class="ilustration-wrapper">
        <img src="../assets/bdd1.gif" alt="" />
      </div>
      <div class="infos-wrapper">
        <p class="text">
          This is the dashboard of your projects. You could check all your
          harvests and graphs comparing the data from all your harvests.
        </p>
      </div>
    </div>
    <div class="howItWorks-wrapper container">
      <div class="ilustration-wrapper">
        <img src="../assets/bdd2.gif" alt="" />
      </div>
      <div class="infos-wrapper">
        <p class="text">
          Click in the bottom to create a new harvest. Fill the inputs to save
          and start the dataset.
        </p>
      </div>
    </div>
    <div class="howItWorks-wrapper container">
      <div class="ilustration-wrapper">
        <img src="../assets/bdd3.gif" alt="" />
      </div>
      <div class="infos-wrapper">
        <p class="text">
          When your put your data, day by day, you will have a dataset to a
          specific harvest.
        </p>
      </div>
    </div>
    <div class="howItWorks-wrapper container">
      <div class="ilustration-wrapper">
        <img src="../assets/bdd4.gif" alt="" />
      </div>
      <div class="infos-wrapper">
        <p class="text">
          Each day has your own dataset. If you click, we can see all the
          specific data from that day.
        </p>
      </div>
    </div>
    <div class="howItWorks-wrapper container">
      <div class="ilustration-wrapper">
        <img src="../assets/bdd5.gif" alt="" />
      </div>
      <div class="infos-wrapper">
        <p class="text">
          In the top of your harvest page you can see a full calendar to manage
          and remider tasks.
        </p>
      </div>
    </div>
    <div class="howItWorks-wrapper container">
      <div class="ilustration-wrapper">
        <img src="../assets/bdd6.gif" alt="" />
      </div>
      <div class="infos-wrapper">
        <p class="text">
          Insert how many days do you need to harvest. At the bottom of page you
          could see the graphs and a comparative table.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HowItWorks',
}
</script>

<style scoped>
.howItWorks {
  height: 100%;
  width: 100%;
  background: #a7ff83;
  padding: 2rem 0;
}
.howItWorks-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row;
}
.text {
  font-family: 'Rubik', sans-serif;
  font-size: 18px;
}
.text.align-center {
  text-align: center;
  padding-bottom: 20px;
}
.infos-wrapper,
.ilustration-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
}
.ilustration-wrapper img {
  max-width: 100%;
  padding: 10px 10px 10px 0;
}
.title {
  font-family: 'Source Serif Pro', serif;
  font-size: 30px;
  font-weight: bolder;
  font-style: italic;
  line-height: 30px;
  text-align: center;
  padding-bottom: 30px;
}
@media (max-width: 768px) {
  .howItWorks-wrapper {
    flex-flow: column;
  }
  .invert-column-mobile {
    flex-flow: column-reverse;
  }
  .text {
    padding-bottom: 30px;
  }
}
</style>
