// title, desc, imageUrl, publishedDate, duration(min), link 
import Moment from 'react-moment';

import { Article } from "./article.types";

const article: Article = {
    title: "Digital PID Controller with Arduino",
    desc: "Mengirimkan data temperatur dan kelembapan ke Adafruit IO serta mengontrol LED dari Adafruit IO.",
    imageUrl: "https://miro.medium.com/max/684/0*8Pa3-2Na7P9EfBnP",
    publishedDate: new Date("Nov 8, 2021"),
    duration: 8,
    link: "https://medium.com/@workshopitb/adafruit-io-dengan-esp32-819e6e9d223a"
}

const ArticleCard = (): JSX.Element => {
    return (<>
        <div className="flex p-3">
            <a href={article.link} rel="noopener noreferrer" target={'_blank'}>
                <div className="flex flex-wrap bg-slate-50 w-full h-fll rounded-lg shadow-lg">
                    <img className='h-[165px] w-full object-cover md:w-1/3 rounded-lg border-b-2 md:border-b-0 md:border-r-2' src={article.imageUrl} alt={article.title} />
                    <div className="flex flex-col justify-between p-3 w-full md:w-2/3 max-w-2xl">
                        <h2 className="font-sans text-xl font-semibold">{(article.title.length > 50) ? article.title.substring(0, 50) + '...' : article.title}</h2>
                        <h3 className="font-sans text-md">{(article.desc.length > 200) ? article.desc.substring(0, 200) + '...' : article.desc}</h3>
                        <div className="flex flex-row justify-start">
                            <p className='font-sans font-semibold text-md mr-4'>
                                <Moment format="YYYY/MM/DD">
                                    {article.publishedDate.toISOString()}
                                </Moment>
                            </p>
                            <p className='font-sans font-semibold text-md mx-4'>{article.duration} min read</p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    </>);
}

export default ArticleCard;