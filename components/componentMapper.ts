import type { Component } from 'vue'
import NoComponent from "./NoComponent.vue";

import Editorial from "./Editorial.vue";
import Hero from "./Hero.vue";
import Cta from "./Cta.vue";
import ProductDetail from "./ProductDetail.vue";
import ProductHighlight from "./ProductHighlight.vue";
import Routine from "./Routine.vue"
import Tutorial from "./Tutorial.vue"
import Card from "./Card.vue"
import TutorialItem from "./TutorialItem.vue"
import ProductList from "./ProductList.vue"

type Mapping = {
  [name: string]: Component
}

export const mapping: Mapping = {
  Editorial,
  Hero,
  Cta,
  ProductDetail,
  ProductHighlight,
  Routine,
  Tutorial,
  Card,
  TutorialItem,
  ProductList
};

export function getComponentForName(name: string) {
  return mapping[name] ?? NoComponent
}