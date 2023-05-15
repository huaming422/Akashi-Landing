import { Icon } from "@iconify/react";
import Button from "./button";

export const Landing = () => {
  return (
    <>
      <div className="flex flex-col  items-center bg-custom-color w-full py-3 justify-between box-border h-[20vh] p-[10px] min-[1120px]:flex-row">
        <div className="flex  flex-row  items-center justify-start">
          <div className=' hidden sm:block bg-cover w-[140px] h-[90px] bg-[url("./img/Akashism.png")]'></div>
          <div className="flex flex-col py-5 items-center justify-center">
            <div className='hidden sm:block self-start bg-cover w-[140px] h-[48px] bg-[url("./img/Akashism_1.png")] mt-10'></div>
            <div className="text-left font-normal">
              <div className='block sm:hidden self-start bg-cover w-[220px] h-[72px] bg-[url("./img/footerImg.png")] mb-7'></div>
              <p className="text-center">
                A reward-based token ecosystem
                <br />
                on the Ethereum blockchain.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10 min-[710px]:gap-0 items-center justify-center md:flex-row pt-5  text-gray-700 font-semibold">
          <div className="min-[710px]:mr-6 flex  flex-col gap-3">
            {/* <div className="flex items-center sm:flex-row flex-col justify-center">
                            <span className='text-lg'>Audit By:</span>
                            <div className='mt-1 w-24 h-8  bg-cover bg-[url("./img/certik.png")]'></div>
                        </div>
                        <div className="flex  sm:flex-row flex-col items-center justify-center ">
                            <span className='text-lg'>Listed On: </span>
                            <div className="flex flex-row gap-3 sm:gap-0 mr-1">
                                <div className='sm:mr-3 sm:ml-2 w-5 h-5 bg-cover bg-[url("./img/coinmarketcap.png")]'></div>
                                <div className='w-5 h-5  bg-cover bg-[url("./img/coingecko.png")]'></div>
                            </div>
                        </div> */}
            <div class="md:grid md:grid-cols-2 md:mt-6 2xl:grid-cols-4 2xl:mt-2 gap-4 flex flex-col items-center justify-center my-7">
              <a href="#" class="bend">
                <div>Security Audit</div>
              </a>
              <a href="#" class="bend">
                <div>CoinMarketCap</div>
              </a>
              <a href="#" class="bend">
                <div>Coin Gecko</div>
              </a>
              <a href="#" class="bend">
                <div>DEXTools</div>
              </a>
            </div>
            <div className="md:self-end md:-mt-6 -mb-6 sm:-mb-0 flex flex-col gap-4 md:gap-0">
              <div className="">Join Our Community</div>
              <div className="flex flex-row justify-center items-center px-3 gap-4">
                <a href="#" className="text-gray-700">
                  <Icon width={28} height={28} icon="uil:twitter" />
                </a>
                <a href="#" className="text-gray-700">
                  <Icon
                    width={28}
                    height={28}
                    icon="fa-brands:telegram-plane"
                  />
                </a>
                <a href="#" className="text-gray-700">
                  <Icon width={28} height={28} icon="ic:twotone-discord" />
                </a>
                <a href="#" className="text-gray-700">
                  <Icon width={28} height={28} icon="fa6-brands:reddit-alien" />
                </a>
                <a href="#" className="text-gray-700">
                  <Icon width={28} height={28} icon="uil:github" />
                </a>
                <a href="#" className="text-gray-700">
                  <Icon width={28} height={28} icon="mdi:paper-outline" />
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col text-center">
            <div className="flex flex-row justify-center my-5 mt-2 md:-mt-5 2xl:-mt-0">
              <Button label={"Launch Dapp"} />
              <Button label={"Buy Akashi"} />
            </div>
            <span>AKASHI: 0x00000000000000000000000000000</span>
            <span>Copyright © 2023 by Akashi Cloud. All Rights Reserved. </span>
          </div>
        </div>
      </div>
    </>
  );
};
