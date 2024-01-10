const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UC8rKCy_tipwTEY3RdkNCKmw&part=snippet%2Cid&order=date&maxResults=9';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4a0415332dmsh971e95e092e3ac7p1312b5jsn87af70fe9d50',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

const content = null || document.getElementById('content');

async function fetchData(urlApi){
  const response = await fetch (urlApi,options);
  const data = await response.json();
  return data;
}

(async () => {
  try{
    const videos = await fetchData(API);
    let view =`
      ${videos.items.map(video => `
        <div class="group relative">
          <div
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full"/>
          </div>
          <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
              <span aria-hidden="true" class="absolute inset-0"></span>
               ${video.snippet.title}
            </h3>
          </div>
        </div>
      `).slice(0,8).join('')}
    `;
    content.innerHTML = view;
  }catch(error){
    console.log(error);
  }
})();