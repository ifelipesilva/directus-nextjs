const assetsUrl = process.env.NEXT_PUBLIC_ASSETS_URL;

export default function PostCard({ title, body, image }) {
  return (
    <div class="w-full sm:max-w-6xl sm:mx-auto px-4">
      <div class="flex justify-around flex-wrap">
        <a href="#">
          <article class="overflow-hidden rounded shadow my-4">
            <div class="sm:flex sm:flex-wrap">
              <div class="sm:w-1/2 h-56 sm:h-auto relative">
                <img
                  class="w-full h-full absolute inset-0 object-cover"
                  src={`${assetsUrl}/${image}`}
                  alt="image"
                />
              </div>
              <div class="sm:w-1/2 p-4">
                <span class="uppercase tracking-wide inline-block px-2 rounded-full text-xs bg-gray-300 text-gray-600">
                  travel
                </span>

                <h4 class="text-lg font-semibold capitalize text-gray-800 mt-2">
                  {title}
                </h4>

                <p class="text-gray-700 mt-2">{body}</p>

                <div class="flex items-center mt-3">
                  <img
                    class="h-10 w-10 object-cover rounded"
                    src="https://source.unsplash.com/collection/8742401/200x200"
                    alt="image"
                  />
                  <div class="pl-3 text-sm text-gray-600">
                    <p class="truncate">Neil Jafferson</p>
                    <time>20 June, 2019</time>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </a>
      </div>
    </div>
  );
}
