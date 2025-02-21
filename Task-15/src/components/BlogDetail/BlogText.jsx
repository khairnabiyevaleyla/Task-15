import React from "react";
import BodyImages from "./BodyImages";

const BlogText = () => {
  return (
    <div className="max-w-full md:max-w-[85%] lg:max-w-[70%] mx-auto px-4 md:px-6 lg:px-0">
      <div>
        <p className="text-[16px] md:text-[18px] font-archivo text-[#555555] font-light mb-5">
          These are the people who make your life easier. Large tiles were
          arranged on the counter top plate near the window of the living room,
          they were...This year, it marks its 50th anniversary by getting back
          to its roots in style with new, limited edition models. Celebrate this
          local brand and its exceptional craftsmanship with us.
        </p>
        <p className="text-[16px] md:text-[18px] font-archivo text-[#555555] font-light mb-6">
          Umino story began in 1970 with the snow-covered landscape of Montreal
          as a backdrop. Louis Grenier, a young man whose family worked in the
          textile industry, was looking to develop technology that could brave
          the harshest winter conditions. Quickly, his coats gained popularity
          and became local legend.
        </p>
        <div className="flex flex-col md:flex-row gap-3">
          <div>
            <i className="ri-double-quotes-l text-[40px] md:text-[50px]"></i>
          </div>
          <div>
            <h3 className="text-[20px] md:text-[24px] font-archivo text-black font-light mb-5">
              “ We are content to rest in peace, when the whole universe is
              changing every second. Take the opportunity because opportunities
              don't come twice ”
            </h3>
            <p className="text-[12px] md:text-[14px] font-archivo text-[#666666] mb-5">
              MICHAEL ANTHONY
            </p>
          </div>
        </div>
        <p className="text-[16px] md:text-[18px] font-archivo text-[#555555] font-light mb-8">
          The Montreal-based company has been located on Rachel Street since the
          very beginning. It’s at this location in the heart of the
          Plateau-Mont-Royal where all Umino coats are crafted using a
          meticulous artisanal manufacturing process. Directly inspired by the
          climate in which they live, the artisans work with care to create
          warm, heavy-duty coats. Each model is designed to perform a specific
          function while still staying fashionable. No detail is left to chance!
          With a lifetime guarantee, Umino creations come with the promise of
          braving many winters, even the most difficult ones.
        </p>
        <BodyImages />
        <p className="text-[16px] md:text-[18px] font-archivo text-[#555555] font-light mb-5">
          Limited edition coats inspired by its iconic models. These robust
          parkas with vintage charm demonstrate a unique mix of yesterday's cult
          style with today's textile technology. Their Thermo+ synthetic
          insulation is known for its exceptional thermal properties and its
          performance in wet conditions. But the shore people would change their
          minds about it at sea, on a long voyage.
        </p>
        <p className="text-[16px] md:text-[18px] font-archivo text-[#555555] font-light mb-8">
          They are equipped with a breathable and waterproof membrane that’s
          resistant to weather and wind. The men’s Toundra model stands out for
          its four pockets in the front and elastic cuffs. The Typha style for
          women offers a loose-fitting silhouette that cinches at the waist. In
          the both cases, we absolutely love the cozy, sherpa-lined collar with
          a hidden hood, a detail that’s practical and trendy.
        </p>
        <div className="flex flex-col sm:flex-row justify-between mb-10 gap-4 sm:gap-0">
          <div className="flex flex-row gap-3 items-center">
            <p className="text-[16px] md:text-[17px] font-medium font-archivo">
              Tags:
            </p>
            <span className="blog-tag">Tag</span>
          </div>
          <div className="flex flex-row gap-3 items-center">
            <p className="text-[16px] md:text-[17px] font-medium font-archivo">
              Share:
            </p>
            <ul className="flex flex-row gap-2 items-center">
              <li>
                <i className="ri-twitter-fill text-[18px] md:text-[20px]"></i>
              </li>
              <li>
                <i className="ri-facebook-fill text-[18px] md:text-[20px]"></i>
              </li>
              <li>
                <i className="ri-pinterest-line text-[18px] md:text-[20px]"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogText;
