

import axios from 'axios';

class JoblyApi {
    static async request(endpoint, paramsOrData = {}, verb = "get") {
      // paramsOrData._token = ( // for now, hardcode token for "testing"
      // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc" +
      // "3RpbmciLCJpc19hZG1pbiI6ZmFsc2UsImlhdCI6MTU1MzcwMzE1M30." +
      // "COmFETEsTxN_VfIlgIKw0bYJLkvbRQNgO1XCSE8NZ0U");
      paramsOrData._token = localStorage.getItem('_token');
      console.debug("API Call:", endpoint, paramsOrData, verb);
  
      try {
        return (await axios({
          method: verb,
          url: `http://localhost:3001/${endpoint}`,
          [verb === "get" ? "params" : "data"]: paramsOrData})).data;
          // axios sends query string data via the "params" key,
          // and request body data via the "data" key,
          // so the key we need depends on the HTTP verb
      }
  
      catch(err) {
        console.error("API Error:", err.response);
        let message = err.response.data.message;
        throw Array.isArray(message) ? message : [message];
      }
    }
  
    static async getCompany(handle) {
      let res = await this.request(`companies/${handle}`);
      return res.company;
    }

    static async getCompanies(){
      let res = await this.request("companies");
      return res.companies;
    }

    static async searchComnpanies(searchParam){
      let res = await this.request('companies',this.paramsOrData={search:searchParam});
      return res.companies;
    }







    //Get a single job corresponding to jobid
    static async getJob(jobid){
      let res = await this.request(`jobs/${jobid}`);
      return res.job;
    }
    //Get list of all jobs
    static async getJobs(){
      let res = await this.request('jobs');
      return res.jobs;
    }

    static async searchJobs(searchParam){
      let res = await this.request('jobs',this.paramsOrData={search:searchParam});
      return res.jobs;
    }

    //Post a new Job
    static async createJob(jobdata){
      let res = await this.request('jobs',this.verb="post",this.paramsOrData=jobdata)
      return res.status
    }

    //Patch or Update an existing Job corresponding to jobid
    static async updateJob(jobid){
      let res = await this.request(`jobs/${jobid}`,this.verb="patch")
      return res.job

    }

    //Delete a job corresponding to jobid
    static async deleteJob(jobid){
      let res = await this.request(`jobs/${jobid}`,this.verb="delete");
      return res.message;

    }

    //Apply For a Job corresponding to jobid
    static async applyJob(jobid){

      let res = await this.request(`jobs/${jobid}/apply`,
                                    this.paramsOrData={username:localStorage.getItem("user")},
                                    this.verb="post");
      return res.message;
    }

    static async login(x){
      try{
      let res = await this.request(`login`,this.paramsOrData=x,this.verb="post");
      return res.token;
      }
      catch(err){
        throw err;
      }
    }

    static async register(x){
      try{
        let res = await this.request('users',this.paramsOrData=x,this.verb="post");
        return res;
      }
      catch(err){
        console.debug(err)
      }

    }

    static async getUserInfo(username){
      let res = await this.request(`users/${username}`)
      return res
    }
  }
  
export default JoblyApi


