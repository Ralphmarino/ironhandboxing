export type Testimonial = {
  name: string;
  date: string;
  quote: string;
  /** Short pull-quote used on the homepage marquee. */
  highlight?: string;
};

/**
 * Verbatim Google Business Profile reviews. Selected for range — results,
 * kids' classes, absolute beginners, and competition coaching — rather than
 * simply the most recent. Do not edit the wording of a review.
 */
export const testimonials: Testimonial[] = [
  {
    name: 'Salvador Pavia',
    date: 'Jul 2025',
    quote:
      'The best boxing gym in Staten Island lost 88 pounds from joining this gym highly Recommend',
    highlight: 'Lost 88 pounds',
  },
  {
    name: 'Joseph Calamia',
    date: 'Jan 2024',
    quote:
      'It’s been 3 months since coach Ian started my program, and I’ve lost 20 lbs. I’ve never felt better or more confident. Can’t recommend their gym enough.',
    highlight: '20 lbs in 3 months',
  },
  {
    name: 'Melissa Quintana',
    date: 'Jan 2025',
    quote:
      'Ironhand Boxing gym is great ! My son (8yo) started about to weeks ago and is already advancing, he looks forward to each class !!!! The coaches are patient, kind and professional ! Highly recommend !!! 10/10',
    highlight: 'Patient, kind, professional',
  },
  {
    name: 'Seraiah Afonja',
    date: 'Dec 2025',
    quote:
      'The coach and people here are amazing. Everyone is kind and welcoming to people of all skill levels. The classes are great, I see and feel improvements each and every class I attend. I love it here',
    highlight: 'All skill levels',
  },
  {
    name: 'Gabriel Fox',
    date: 'Jul 2025',
    quote:
      'The coaches and the gym are great, real family friendly oriented environment for adults and children, Ian is a great coach who was extremely patient and helped me in the gym and the people are cool here',
    highlight: 'Real family friendly',
  },
  {
    name: 'Jamal Issa',
    date: 'Jan 2025',
    quote:
      'Ian and Mark are top of the line instructors that show everyone the same level of care and attention !! 10/10 Recommend to check this place out if you want to start boxing!',
    highlight: 'Top of the line instructors',
  },
  {
    name: 'Vybz39',
    date: 'Apr 2025',
    quote:
      'felt very welcomed once i stepped foot in the gym,great facility and great coaching the vibes all around are immaculate definitely recommend to sign up',
    highlight: 'The vibes are immaculate',
  },
  {
    name: 'Ryan Patterson',
    date: 'Oct 2023',
    quote:
      'Passionate, caring, and confidence-instilling trainer. He welcomes all levels, delivers quick results. Thanks to him, I walk with my head higher thanks to newfound work ethic and fighting ability.',
    highlight: 'I walk with my head higher',
  },
  {
    name: 'Matthew Shostak',
    date: 'Oct 2023',
    quote:
      'Ian is one of the most knowledgeable and skilled boxing instructor who teaches his students discipline and technique. I highly recommend this gym for newcomers and experienced boxing enthusiasts.',
    highlight: 'Discipline and technique',
  },
  {
    name: 'Seth Cordova',
    date: 'Mar 2024',
    quote:
      'Best and most successful boxing coach on Staten Island no doubt. Ian creates a very good environment. Highly recommend the personal sessions',
    highlight: 'Best coach on Staten Island',
  },
  {
    name: 'Fife Cira',
    date: 'Feb 2024',
    quote:
      'Hands down an amazing coach. You know how I know? When my niece comes home excited and wants to box me after a class that’s how. Thanks for making it fun for her!',
    highlight: 'Making it fun',
  },
  {
    name: 'Juan Aucaquizhpio',
    date: 'Nov 2023',
    quote:
      'Wonderful trainer one of a kind Ian works with you and guides you to become better by finding your flaws and turning them into your strongest points , If you want to get in shape Iron Hand Boxing is the way.',
    highlight: 'Flaws into strengths',
  },
  {
    name: 'Jackie',
    date: 'Jun 2024',
    quote:
      'Best boxing gym on the island! I highly recommend giving this gym a shot- you won’t regret it',
    highlight: 'Best gym on the island',
  },
  {
    name: 'Michael McLaughlin',
    date: 'Oct 2024',
    quote:
      'Teaches core values and principles of discipline through skillful leadership and technical training',
    highlight: 'Core values and discipline',
  },
];
