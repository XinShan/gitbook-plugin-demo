module.exports = {
  
  // Extend website resources and html
    website: {
        assets: "./assets/",
        js: [
            "demo.js"
        ],
        css: [
            "demo.css"
        ],
        html: {
            "html:start": function() {
                return "<!-- Start book "+this.options.title+" -->"
            },
            "html:end": function() {
                return "<!-- End of book "+this.options.title+" -->"
            },

            "head:start": "<!-- head:start -->",
            "head:end": "<!-- head:end -->",

            "body:start": "<!-- body:start -->",
            "body:end": "<!-- body:end -->"
        }
    },

    // Extend ebook resources and html
    website: {
        assets: "./assets/",
        js: [
            "demo.js"
        ],
        css: [
            "demo.css"
        ],
        html: {
            "html:start": function() {
                return "<!-- Start book "+this.options.title+" -->"
            },
            "html:end": function() {
                return "<!-- End of book "+this.options.title+" -->"
            },

            "head:start": "<!-- head:start -->",
            "head:end": "<!-- head:end -->",

            "body:start": "<!-- body:start -->",
            "body:end": "<!-- body:end -->"
        }
    },

  // build 时绑定
  hooks: {
  	"init": function(){
  		console.log("init!");
  	},

  	"finish:before": function(){
  		console.log("finish:before");
  	},

  	"finish": function(){
  		console.log("finish");
  	}
  },

  blocks: {
  	myTag: {
  	  process: function(blk){
  	    return "Hello" + blk.body;
  	  }
  	}
  },
  
  filters: {
  	myFilter: function(s){
  		return "Hello "+s;
  	}
  }
};