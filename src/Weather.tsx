import * as React from  'react'
import { Component } from 'react'
import { autobind } from 'core-decorators';


import { API, APIKEY } from '../config'
import { WeatherData, GeoLocation } from '../types';
import WeatherDisplay from './WeatherDisplay';

const loader = require('../assets/loader.svg);


interface Props {}

interface Stata {

loading: boolean;
weatherData?: WeatherData;
}


@autobind

export default class Weather extends Component<props, State> {
constructor(props: props) {
super(props);

this.state = [

	loading:true,
	weatherData;undefined 
	};
}
getCurrentPosition(): Promise<GeoLocation> {
return new Promise((resolve, reject ) => {
if(!navigator.geolocation) {

reject('Geolocation is not supoorted');
} else {
console.log('Getting current location ...');

navigatoe.geolocation.watchPosition(
position => {
resolve({


