(function($) {
  $.fn.lorem = function(options) {
  	$.fn.lorem.defaults = {
		type: 'paragraphs',
		amount: '3',
		ptags: true
	};
	var opts = $.extend({}, $.fn.lorem.defaults, options);
	var min_num = 1;  
	var max_num = 10; 
	var diff = max_num-min_num+1 ; 
	var howmany = opts.amount;
	var lorem = new Array(10);
	lorem[1] ="Nam quis nulla. Integer malesuada. In in enim a arcu imperdiet malesuada. Sed vel lectus. Donec odio urna, tempus molestie, porttitor ut, iaculis quis, sem. Phasellus rhoncus. Aenean id metus id velit ullamcorper pulvinar. Vestibulum fermentum tortor id mi. Pellentesque ipsum. Nulla non arcu lacinia neque faucibus fringilla. Nulla non lectus sed nisl molestie malesuada.";
	lorem[2] ="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Aliquam erat volutpat. Nunc auctor. Mauris pretium quam et urna. Fusce nibh. Duis risus. Curabitur sagittis hendrerit ante. Aliquam erat volutpat. Vestibulum erat nulla, ullamcorper nec.";
	lorem[3] ="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi gravida libero nec velit. Morbi scelerisque luctus velit. Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam. Proin mattis lacinia justo. Vestibulum facilisis auctor urna. Aliquam in lorem sit amet leo accumsan lacinia. Integer rutrum, orci vestibulum ullamcorper ultricies, lacus quam ultricies odio.";
	lorem[4] ="Etiam posuere quam ac quam. Maecenas aliquet accumsan leo. Nullam dapibus fermentum ipsum. Etiam quis quam. Integer lacinia. Nulla est. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Integer vulputate sem a nibh rutrum consequat. Maecenas lorem. Pellentesque pretium lectus id turpis. Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante. ";
	lorem[5] ="In sem justo, commodo ut, suscipit at, pharetra vitae, orci. Duis sapien nunc, commodo et, interdum suscipit, sollicitudin et, dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam id dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Mauris dictum facilisis augue. Fusce tellus. ";
	lorem[6] ="Morbi a metus. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Nullam sapien sem, ornare ac, nonummy non, lobortis a, enim. Nunc tincidunt ante vitae massa. Duis ante orci, molestie vitae, vehicula venenatis, tincidunt ac, pede. Nulla accumsan, elit sit amet varius semper, nulla mauris mollis quam, tempor suscipit diam nulla vel leo. Etiam commodo dui eget wisi. ";
	lorem[7] ="Praesent in mauris eu tortor porttitor accumsan. Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus. Aenean fermentum risus id tortor. Integer imperdiet lectus quis justo. Integer tempor. Vivamus ac urna vel leo pretium faucibus. Mauris elementum mauris vitae tortor. In dapibus augue non sapien. Aliquam ante.";
	lorem[8] ="Morbi leo mi, nonummy eget, tristique non, rhoncus non, leo. Nullam faucibus mi quis velit. Integer in sapien. Fusce tellus odio, dapibus id, fermentum quis, suscipit id, erat. Fusce aliquam vestibulum ipsum. Aliquam erat volutpat. Pellentesque sapien. Cras elementum. Nulla pulvinar eleifend sem. Cum sociis natoque penatibus et magnis dis parturient montes.";
	lorem[9] ="Maecenas ipsum velit, consectetuer eu, lobortis ut, dictum at, dui. In rutrum. Sed ac dolor sit amet purus malesuada congue. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Suspendisse sagittis ultrices augue. Mauris metus. Nunc dapibus tortor vel mi dapibus sollicitudin. Etiam posuere lacus quis dolor.";
	lorem[10] ="Aenean placerat. In vulputate urna eu arcu. Aliquam erat volutpat. Suspendisse potenti. Morbi mattis felis at nunc. Duis viverra diam non justo. In nisl. Nullam sit amet magna in magna gravida vehicula. Mauris tincidunt sem sed arcu. Nunc posuere. Nullam lectus justo, vulputate eget, mollis sed, tempor sed, magna. Cum sociis natoque penatibus et magnis dis parturient montes,";
	function makeipsum(){
		var ipsum_text = "";
		for (var i = 0; i < howmany; i++){
			rnd_number=Math.floor(Math.random()*diff + min_num); 
		if(options.ptags==true){
			ipsum_text+="<p>";
		}
		ipsum_text+=lorem[rnd_number];
		if(opts.ptags==true){
			ipsum_text+="</p>";
		}
		ipsum_text+="\n\n";
		}
		switch(opts.type) {
			case "words":{
		      	var numOfWords = opts.amount;
				numOfWords = parseInt( numOfWords );
				var list = new Array();
				var wordList = new Array();
				wordList = ipsum_text.split( ' ' );
				var iParagraphCount = 0;
				var iWordCount = 0;
				while( list.length < numOfWords ) {
					if( iWordCount > wordList.length ) {
						iWordCount = 0;
		        		iParagraphCount++;
		      		  	if( iParagraphCount + 1 > lorem.length ) {
							iParagraphCount = 0;
						}
		        		wordList = lorem[ iParagraphCount ].split( ' ' );
		        		wordList[0] = "\n\n" + wordList[ 0 ];
					}
		       		list.push( wordList[ iWordCount ] );
		       		iWordCount++;
				}
				ipsum_text = list.join(' '); // changed
			break;
			}
			case 'characters':
			{
				var outputString = '';
			    var numOfChars = opts.amount;
			    numOfChars = parseInt( numOfChars );
			    var tempString = lorem.join( "\n\n" );
				while(outputString.length < numOfChars ){
						outputString += tempString;
				}
			    ipsum_text = outputString.substring(0, numOfChars );
			break;
			}
			case 'paragraphs':{
			///no action needed
			break;
			}
		}
		return ipsum_text;
	}


return this.each(function() {
	  $this = $(this);
	  var markup = makeipsum();
	  $this.html(markup);
	  
	});
  };

})(jQuery);