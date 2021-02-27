const express = require('express');
const request = require('supertest');
const expect = require('chai').expect;

describe('First Get Request Unit Test',()=>{
  
   it('Check get request',()=>{
       request('https://reqres.in/')
       .get('/api/users/2')
       .expect(200);        
        
   });
});
 
