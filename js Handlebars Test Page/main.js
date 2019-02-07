/*
Getting registerHelper function to provide some IF sorting for HB
Source: https://gist.github.com/servel333/21e1eedbd70db5a7cfff327526c72bc5

	{{#if (or 
	        (eq section1 "foo")
	        (ne section2 "bar"))}}
	.. content
	{{/if}}

	{{#if (or condA condB condC)}}
	.. content
	{{/if}}
*/

const reduceOp = function(args, reducer){
  args = Array.from(args);
  args.pop(); // => options
  var first = args.shift();
  return args.reduce(reducer, first);
};

Handlebars.registerHelper({
  eq  : function(){ return reduceOp(arguments, (a,b) => a === b); },
  ne  : function(){ return reduceOp(arguments, (a,b) => a !== b); },
  lt  : function(){ return reduceOp(arguments, (a,b) => a  <  b); },
  gt  : function(){ return reduceOp(arguments, (a,b) => a  >  b); },
  lte : function(){ return reduceOp(arguments, (a,b) => a  <= b); },
  gte : function(){ return reduceOp(arguments, (a,b) => a  >= b); },
  and : function(){ return reduceOp(arguments, (a,b) => a  && b); },
  or  : function(){ return reduceOp(arguments, (a,b) => a  || b); },
}); 

/*
	trying out First template:
*/


// declaring context object containing array for source of content:
const context = {
	variables: [
		{
			name: 'First One',
			check: true
		},
		{
			name: 'Second One',
			check: false
		},
		{
			name: 'Third One',
			check: true
		},
		{
			name: 'Fourth One',
			check: false
		}
	]
};

// declaring the source for HB code:
const source = document.getElementById('repeatBox1').innerHTML;
// declaring 'template' function, and using HB .compile function to pass the source to HB:
const template = Handlebars.compile(source);
// passing context to 'template' fucntion:
const compiledHtml = template(context);
// getting the element from DOM we goint to pass context to:
const repeatBox = document.getElementById('repeatBoxWrapId-1');
// setting element context to compiled HTML:
repeatBox.innerHTML = compiledHtml;

/*
	trying out second template, but this time we're sorting in diff order:
*/
// declaring the source for HB code:
const sourceTwo = document.getElementById('repeatBox2').innerHTML;
// declaring 'template' function, and using HB .compile function to pass the source to HB:
const templateTwo = Handlebars.compile(sourceTwo);
// passing context to 'template' fucntion:
const compiledHtmlTwo = templateTwo(context);
// getting the element from DOM we goint to pass context to:
const repeatBoxTwo = document.getElementById('repeatBoxWrapId-2');
// setting element context to compiled HTML:
repeatBoxTwo.innerHTML = compiledHtmlTwo;

