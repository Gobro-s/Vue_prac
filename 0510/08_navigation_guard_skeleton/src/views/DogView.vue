<template>
  <div>
    <input type="text" v-model="breed" @keyup.enter="getDogImage">
    <button @click="getDogImage" >검색</button>
    <p v-if="!imgSrc" >{{ message }}</p>
    <img v-if="imgSrc" :src="imgSrc" alt="" />
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "DogView",
  data() {
    
    return {
      breed: '',
      imgSrc: null,
      message: '품종을 입력해주세요'
    };
  },
  methods: {
    getDogImage() {
      
      const breed = this.breed
      console.log(breed);
      // const base_url = 'https://dog.ceo/api/breed/';

      // //1.  breed 공백 검사 
      // // let dogImageSearchURL = `https://dog.ceo/api/breed/${breed}/images/random`;
      
      // // if 공백 유무에 따른  url 
      // if (' ' in breed) {
      //   const detailBreed = breed.split(' ')
      //   const subBreed = detailBreed[0]
      //   const realBreed = datailBreed[1]

      //   const dogImageSearchURL = `${base_url}/${realBreed}/${subBreed}/images/random`
      // } else {
      //   return
      //   const dogImageSearchURL = `https://dog.ceo/api/breed/${breed}/images/random`
      // }

const dogImageSearchURL = `https://dog.ceo/api/breed/${breed}/images/random`

      axios({
        method: "get",
        url: dogImageSearchURL,
      })
        .then((response) => {
          console.log(response);
          const dogImgSrc = response.data.message;
          this.imgSrc = dogImgSrc;
        })
        .catch((error) => {
          console.log(error)
        this.message = `${this.breed}는 없는 품종입니다.`
        })
    },
  },
  created() {
    //this.getDogImage();
  },
};
</script>

<style>
</style>