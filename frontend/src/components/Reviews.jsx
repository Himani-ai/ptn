import React from 'react'
import Carousel from './Carousel'

export default function Reviews(){
  const reviews = [
    {
      name: 'Priya Sharma',
      rating: 5,
      text: 'Amazing experience with picTOURnic! The team organized our trip to Kerala flawlessly. Every detail was taken care of, and we had an unforgettable journey.',
      date: 'December 2024',
      initials: 'PS'
    },
    {
      name: 'Rajesh Kumar',
      rating: 5,
      text: 'Best tour operators in Bangalore! Booked a North East package and it exceeded all expectations. Professional service and great value for money.',
      date: 'November 2024',
      initials: 'RK'
    },
    {
      name: 'Anita Desai',
      rating: 4,
      text: 'Very good service for our family vacation to Goa. The resort booking and itinerary were perfect. Will definitely book again.',
      date: 'November 2024',
      initials: 'AD'
    },
    {
      name: 'Vikram Singh',
      rating: 5,
      text: 'Excellent planning for our Dubai trip! From visa assistance to hotel bookings, everything was handled professionally. Highly recommended!',
      date: 'October 2024',
      initials: 'VS'
    },
    {
      name: 'Meera Reddy',
      rating: 5,
      text: 'Wonderful experience with the Golden Triangle tour. Great guides, comfortable transport, and beautiful heritage hotels. Thank you picTOURnic!',
      date: 'October 2024',
      initials: 'MR'
    },
    {
      name: 'Arjun Patel',
      rating: 4,
      text: 'Good service for corporate retreat. Team was responsive and accommodating to our requirements. The nature stay was perfect for team bonding.',
      date: 'September 2024',
      initials: 'AP'
    },
    {
      name: 'Sanjana Iyer',
      rating: 5,
      text: 'Fantastic Maldives honeymoon package! Everything from flight bookings to water villa stay was perfectly arranged. The team was available 24/7 for any queries.',
      date: 'December 2024',
      initials: 'SI'
    }
  ]

  const renderStars = (rating) => {
    return (
      <div className="review-stars">
        {[1, 2, 3, 4, 5].map(star => (
          <span key={star} className={star <= rating ? 'star filled' : 'star'}>★</span>
        ))}
      </div>
    )
  }

  return (
    <section id="reviews" className="reviews-section container">
      <h2>What Our Customers Say</h2>
      <p className="reviews-subtitle">Read genuine reviews from travelers who trusted picTOURnic</p>
      
      <Carousel 
        items={reviews} 
        autoplay={true}
        autoplayInterval={5000}
        renderItem={(review) => (
          <div className="review-card card">
            <div className="review-header">
              <div className="reviewer-avatar">{review.initials}</div>
              <div className="reviewer-info">
                <h4 className="reviewer-name">{review.name}</h4>
                <span className="review-date">{review.date}</span>
              </div>
            </div>
            {renderStars(review.rating)}
            <p className="review-text">{review.text}</p>
          </div>
        )}
      />

      <div className="reviews-cta">
        <a 
          className="btn primary" 
          href="https://share.google/vg5qwR0xpsc9TCQzt" 
          target="_blank"
          rel="noopener noreferrer"
        >
          See All Google Reviews
        </a>
      </div>
    </section>
  )
}
