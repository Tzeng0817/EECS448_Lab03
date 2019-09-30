
var img_dex = 0;
var m_img = document.getElementById('MySlides');
var img_arr = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];



Next = function()
{
	img_dex++;
	if(img_dex === img_arr.length)
	{
		img_dex = 0;
		m_img.setAttribute("src", img_arr[img_dex]);
	}
	else
	{
		m_img.setAttribute("src", img_arr[img_dex]);
	}

}


Previous = function()
{
	img_dex--;
	if(img_dex === -1)
	{
		img_dex = img_arr.length-1;
		m_img.setAttribute("src", img_dex[img_dex]);
	}
	else
	{
		m_img.setAttribute("src", img_arr[img_dex]);
	}
}
