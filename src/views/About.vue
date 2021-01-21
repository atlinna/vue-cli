<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>{{ name }}</h2>
    <h3>{{ getValue }}</h3>
    <h4>{{ globDate }}</h4>
    <h5>{{glodate}}</h5>
    <button @click="handleClick">Click</button>
    <button @click="handleClickTwo">ClickTwo</button>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Action, Getter, Mutation, State } from "vuex-class";

@Component({})
export default class About extends Vue {
  name: string = "hello world";
  flag: boolean = false;
  dog: any;
  

  @State("globalDate") glodate:any;       //获取state中的globalDate属性的属性值。
 
  @Action('getNewDate') gladate:any;      //获取actions中的getNewDate方法
  
  @Mutation('updateDate') updateDate:any; //获取mutations中的 updateDate方法


  get getValue(): string {
    return this.flag ? "这是真的" : "这是假的";
  }

  get globDate(): string {
    return this.$store.state.globalDate;
  }

  handleClick(): void {
    // console.log(this.dog.name("wangwang"));
    // this.dog.info()
    // this.gladate()
    // this.updateDate()
  }
  handleClickTwo(): void {
    // enum Color{red,blue,yellow};
    // let size: Color = 2
    let arr: Array<any> = [, 1, 2, "3", 10];
    console.log(arr);
    arr[0] = "hello world";
    console.log(arr);
  }
  mounted(): void {
    class Animals {
      holo = "wangwa";
      name(param: string): string {
        return param;
      }
      info(): void {
        alert(this.name(this.holo));
      }
    }

    this.dog = new Animals();
  }
}
</script>
