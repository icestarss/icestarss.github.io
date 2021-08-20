window.addEventListener('load',function() {
	var jiantouleft = document.querySelector('.jiantouleft');
	var jiantouright = document.querySelector('.jiantouright');
	var focus = document.querySelector('.focus');
	var tu = document.querySelector('tu');
	var focusWidth = focus.offsetWidth;
	var num = 0;
	var circle = 0;
	var lis =document.querySelectorAll("i");
				for(var i = 0; i < lis.length; i++){
					var index = i*43
					lis[i].style.backgroundPosition = '0 -'+index+'px';
				}
	focus.addEventListener('mouseenter', function(){
		jiantouleft.style.display = 'block';
		jiantouright.style.display = 'block';
		clearInterval(timer);
		timer = null;
	})
	focus.addEventListener('mouseleave', function(){
		jiantouleft.style.display = 'none';
		jiantouright.style.display = 'none';
		timer = setInterval(function(){
		jiantouright.click();
	},3000);

	})
	var ul = focus.querySelector('.tupian');
	var ol = focus.querySelector('.yuanquan');
	for (var i = 0; i < ul.children.length; i++) {
		var li = document.createElement('li');
		li.setAttribute('index', i);
		ol.appendChild(li);
		li.addEventListener('click',function(){
			for(var i =0; i < ol.children.length;i++){
				ol.children[i].className = '';
			}
			this.className = 'current';
			var index = this.getAttribute('index');
			num = index;
			num = circle = index;
			console.log(focusWidth);
			console.log(index);
			animate(ul, - index * focusWidth);
		})
	} 
	ol.children[0].className = 'current';
	var first = ul.children[0].cloneNode(true);
	ul .appendChild(first);
	
	
	jiantouright.addEventListener('click',function(){
		if (num == ul.children.length - 1) {
			ul.style.left = 0;
			num = 0;
		}
		num++;
		animate(ul, -num * focusWidth);
		circle++;
		if (circle == 4){
			circle =0;
		}
		circlechange()
	});

	jiantouleft.addEventListener('click',function(){
		if (num ==  0){
			num = ul.children.length - 1;
			ul.style.left = - num * focusWidth + 'px';
			
		}
		num--;
		animate(ul, -num * focusWidth);
		circle--;
		if (circle < 0){
			circle = ol.children.length -1;
		}
		circlechange()
	});
	function circlechange(){
		for(var i = 0; i < ol.children.length; i++){
			ol.children[i].className='';
		}
		ol.children[circle].className = 'current';
	}
	var timer = setInterval(function(){
		jiantouright.click();
	},2500);
})
