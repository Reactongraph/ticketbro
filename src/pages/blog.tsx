import Link from 'next/link';
import { useEffect, useState } from 'react';

import AppCard from '@/components/appCard';
import KnowMore from '@/components/knowMore';
import ReferenceLinks from '@/components/referenceLinks';
import { Main } from '@/templates/Main';
import { Meta } from '@/layouts/Meta';

const Index = () => {
  const [cardData, setCardData] = useState([]);
  const [secondaryContent, setSecondaryContent] = useState({
    heading: '',
    data: '',
  });
  const [profileData, setProfileData] = useState({
    image: '',
    name: '',
    department: '',
  });
  const [mainContent, setMainContent] = useState({ heading: '', data: '' });
  const [mainImage, setMainImage] = useState('');
  const [moreInfo, setMoreInfo] = useState({ title: '', info: '' });
  const [note, setNote] = useState('');

  const hardCodedData: any = {
    mainImage:
      'https://i0.wp.com/pixahive.com/wp-content/uploads/2021/01/Pebbles-286990-pixahive.jpg?fit=778%2C518&ssl=1',
    mainContent: {
      heading: 'How to create and use an online booking system ?',
      data: 'The person at the entrance collecting the tickets is not going fast enough to get the large queue of people into the venue in less than 20 minutes of waiting. In this moment is when you think about the idea of having an online booking system. With an online booking system you will be able to know in advance how many peopleyou are going to get each day, there will be no need for them to stand in a long line or wait because they will have done the work of paying and getting their ticket easily through their mobile.No queuing, no waiting line. The customer enters directly and easily with the ticket have on their smartphone and has a great day at your venue You may think thats not possible but, in the time it has taken you to read this article, approximately x minutes x people could have comfortably accessed your venue. While you do other things. Its a step into a new era of making money easily simply by having an online booking system. Let us help you manage your business and you, do the rest, that is whatever you want to do.',
    },
    profileData: {
      image: 'https://freesvg.org/img/abstract-user-flat-4.png',
      name: 'Mia Boskovic',
      department: 'Marketing',
    },
    note: "Imagine you are the owner of a business that has to be accessed through tickets. It's an autumn day, people are waiting in a queue under rain. Your clients are getting cold and wet, probably not the best way to start the weekend, don't you think?. How would you manage a weekend day when hundreds of people are lined up in front of your business?",
    secondaryContent: {
      heading:
        'What do we consider to be the main advantages of having an online booking system?',
      data: 'Apart from the fact that you will still be able to sell tickets online at any time of the day.Your business will be closed and in the meantime, you will be able to see in real time how your customers buy tickets from their smartphone. You will have all the information about your venue and the information you need to manage it in your ticketbro app on your smartphone. You will be able to check how many people will visit your venue every day, how many tickets you have sold, how much money you have earned from sales. From anywhere in the workd. You can create new types of tickets, as well as special days, manage the offers you want to put on specific days. Its time to forget about analogic and switch to digitia. You will save time and money!',
    },
    relatedArticles: [
      {
        heading: 'Three keys to keeping your customers satisfied.',
        reference: 'NEWS',
        name: 'Ines Guerrero',
        year: 'Mar 20, 2023',
      },
      {
        heading: 'Top 5 booking features that make a good booking system.',
        reference: 'BUSINESS',
        name: 'Mia Boskovic',
        year: 'Mar 20, 2023',
      },
      {
        heading: 'Faster sales with active analytics.',
        reference: 'CUSTOMERS',
        name: 'Ines Guerrero',
        year: 'Mar 20, 2023',
      },
    ],
    moreInformation: {
      title: 'Do you want to know more about ticketbro?',
      info: "Let's get started. It only takes a few minutes.",
    },
  };

  useEffect(() => {
    setCardData(hardCodedData.relatedArticles);
    setMainImage(hardCodedData.mainImage);
    setMainContent(hardCodedData.mainContent);
    setProfileData(hardCodedData.profileData);
    setSecondaryContent(hardCodedData.secondaryContent);
    setMoreInfo(hardCodedData.moreInformation);
    setNote(hardCodedData.note);
  }, []);

  return (
    <Main
      meta={
        <Meta
          title="Blog page"
          description="Blog page"
        />
      }
    >
      <div
      // className="mx-auto max-w-screen-md"
      >
        <Link href="/" className="mx-auto max-w-screen-md">
          <img
            className="content mx-auto w-[100%] max-w-[672px]"
            src={mainImage}
            alt="pebbles image"
            style={{ borderRadius: '64px' }}
          />
        </Link>
        <h1 className="content mx-auto max-w-screen-md p-9 py-5 text-5xl font-semibold text-[#334155]">
          {mainContent.heading}
        </h1>
        <div className="content mx-auto flex max-w-screen-md p-9 text-xl">
          <a
            className="ml-4"
            href="https://github.com/ixartz/Next-js-Boilerplate"
          >
            <img
              className="h-32 w-32 rounded-full"
              src={profileData?.image}
              alt="pebbles img"
            />
          </a>
          <div>
            <p className="flex flex-col pt-3">
              <span className="text-[#334155]">{profileData?.name}</span>
              <span className="text-xs text-[#64748B]">
                {profileData?.department}
              </span>
            </p>
          </div>
        </div>
        <p className="mx-auto  max-w-screen-sm rounded-lg bg-zinc-200 p-9 text-left text-xl italic text-[#334155]">
          {note}
        </p>
        <p className="content mx-auto flex max-w-screen-sm justify-center p-9 py-5 text-left text-xl text-[#334155] sm:p-4 md:p-4">
          {mainContent.data}
        </p>

        <p className="content mx-auto flex max-w-screen-sm justify-center p-9 py-5 text-left text-2xl font-semibold text-[#334155]">
          {secondaryContent?.heading}
        </p>
        <p className="content mx-auto mb-3 flex max-w-screen-sm justify-center p-9 py-5 text-left text-base text-[#334155]">
          {secondaryContent?.data}
        </p>
        <p className="content mx-auto mb-2 flex max-w-screen-sm justify-center text-left text-4xl font-semibold text-[#334155]">
          Related articles
        </p>
        <p className="content mx-auto mb-12 flex max-w-screen-sm justify-center p-9 text-left text-base font-light text-[#64748B]">
          You might be interested in these articles. Dont miss them!
        </p>
        <div className="mb-24 flex justify-evenly max-[600px]:flex-col max-[600px]:p-9">
          {cardData?.map((articleInfo: any, idx) => {
            return (
              <AppCard
                key={`${idx}`}
                heading={articleInfo.heading}
                reference={articleInfo.reference}
                name={articleInfo.name}
                year={articleInfo.year}
              />
            );
          })}
        </div>
        <KnowMore moreInfo={moreInfo} />
        <ReferenceLinks />
      </div>
    </Main>
  );
};

export default Index;
