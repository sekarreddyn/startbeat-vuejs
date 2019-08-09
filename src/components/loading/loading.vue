<template>
  <div class="loading">
    <div class="dots">
      <div class="dot"/>
      <div class="dot"/>
      <div class="dot"/>
      <div class="dot"/>
      <div class="dot"/>
    </div>
  </div>
</template>
<style scoped>
.dashboard .loading {
  margin: 80px auto;
}
.loading {
  text-align: center;
  max-width: 400px;
  margin: 150px auto;
}
.loading h1 {
  width: 100%;
  color: #5624d2;
  font-family: "Comfortaa", cursive, "Times New Roman", Times, serif;
  margin-bottom: 10px;
  text-transform: uppercase;
  font-size: 18px;
}
.loading .dots {
  position: relative;
  width: 100%;
  -webkit-animation: move-2 3s linear infinite;
  animation: move-2 3s linear infinite;
  -webkit-animation-delay: -400ms;
  animation-delay: -400ms;
}
.loading .dot {
  margin: 0 5px;
  display: inline-block;
  border-radius: 50%;
  width: 0.5rem;
  height: 0.5rem;
  background: #cacaca;
  -webkit-animation: move 3s cubic-bezier(0.1, 0.8, 0.9, 0.1) infinite;
  animation: move 3s cubic-bezier(0.1, 0.8, 0.9, 0.1) infinite;
}
.loading .dot:nth-of-type(2) {
  -webkit-animation-delay: -100ms;
  animation-delay: -100ms;
}
.loading .dot:nth-of-type(3) {
  -webkit-animation-delay: -200ms;
  animation-delay: -200ms;
}
.loading .dot:nth-of-type(4) {
  -webkit-animation-delay: -300ms;
  animation-delay: -300ms;
}
.loading .dot:nth-of-type(5) {
  -webkit-animation-delay: -400ms;
  animation-delay: -400ms;
}

@-webkit-keyframes move {
  0% {
    -webkit-transform: translateX(-10em);
    transform: translateX(-10em);
    opacity: 0;
  }
  10%,
  70% {
    opacity: 0.9;
  }
  80%,
  100% {
    -webkit-transform: translateX(10em);
    transform: translateX(10em);
    opacity: 0;
  }
}

@keyframes move {
  0% {
    -webkit-transform: translateX(-10em);
    transform: translateX(-10em);
    opacity: 0;
  }
  10%,
  70% {
    opacity: 0.9;
  }
  80%,
  100% {
    -webkit-transform: translateX(10em);
    transform: translateX(10em);
    opacity: 0;
  }
}
@-webkit-keyframes move-2 {
  0% {
    -webkit-transform: translateX(4em);
    transform: translateX(4em);
  }
  100% {
    -webkit-transform: translateX(-4em);
    transform: translateX(-4em);
  }
}
@keyframes move-2 {
  0% {
    -webkit-transform: translateX(4em);
    transform: translateX(4em);
  }
  100% {
    -webkit-transform: translateX(-4em);
    transform: translateX(-4em);
  }
}
.react-datepicker__close-icon::after {
  line-height: 11px;
}
</style>
