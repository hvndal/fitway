import re

with open('code.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Remove Est. 2024
html = re.sub(r'<span class="inline-block bg-primary-fixed[^>]*>Est\. 2024</span>', '', html)

# Change Book a Tour to Contact Us
html = html.replace('Book a Tour', 'Contact Us')

# Update Address
html = re.sub(r'Plot 12, Industrial Area Phase 9, Fitway, Punjab\.', 'SCO 34-35, Sector 67, Sahibzada Ajit Singh Nagar, Punjab.', html)

# Inject Marquee CSS
marquee_css = '''
        @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
        }
        .animate-marquee {
            display: flex;
            width: max-content;
            animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
            animation-play-state: paused;
        }
'''
html = html.replace('</style>', marquee_css + '</style>')

# Replace Reviews Section
reviews_html = '''<!-- Reviews Section -->
<section class="py-section-gap overflow-hidden bg-surface-container-low">
    <div class="px-gutter max-w-container-max mx-auto mb-16">
        <div class="flex items-center gap-4">
            <h2 class="font-headline-lg text-headline-lg uppercase text-primary">Google <span class="text-primary-fixed">Reviews</span></h2>
            <svg viewBox="0 0 24 24" width="32" height="32" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
        </div>
        <div class="w-24 h-2 bg-primary-fixed mt-4"></div>
    </div>
    
    <div class="w-full overflow-hidden relative">
        <div class="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-surface-container-low to-transparent z-10 pointer-events-none"></div>
        <div class="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-surface-container-low to-transparent z-10 pointer-events-none"></div>
        
        <div class="animate-marquee gap-6 px-4 hover:cursor-pointer">
            <!-- Review items repeated twice for infinite effect -->
'''

reviews_data = [
    {"name": "Renu Renu", "time": "2 months ago", "text": "Fitway Gym stands out for its professionalism and quality service. The gym is well-equipped hygienic and offers a great workout atmosphere. The staff is cooperative and ensures proper guidance."},
    {"name": "Sujal Soni", "time": "2 months ago", "text": "Hands down the best gym in Sector 67. The equipment is top-notch, the space is always clean, and the vibe is incredibly motivating! Perfectly located near CP67 Mall."},
    {"name": "Akhil Negi", "time": "a month ago", "text": "Amazing gym with great equipment, a motivating atmosphere, and supportive trainers. Highly recommended! All trainer are good but nikhil sir is good trainer."},
    {"name": "Prashant Chauhan", "time": "a month ago", "text": "The staff is always friendly, professional, and ready to help. Excellent customer service and a very welcoming atmosphere. The staff keeps the gym clean, organized, and enjoyable to use."},
    {"name": "Aaditya Sharma", "time": "a month ago", "text": "I’ve had a great experience at this fit way gym. The environment is clean, well-maintained, and very motivating for anyone focused on fitness. The equipment is modern and always in good condition."}
]

review_template = '''
            <div class="brutalist-border bg-background p-8 min-w-[400px] max-w-[400px] flex-shrink-0 flex flex-col justify-between">
                <div>
                    <div class="flex justify-between items-start mb-4">
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center font-label-bold text-primary">{initial}</div>
                            <div>
                                <div class="font-label-bold text-label-bold text-primary uppercase">{name}</div>
                                <div class="font-body-md text-on-surface-variant text-sm">{time}</div>
                            </div>
                        </div>
                        <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                    </div>
                    <div class="flex text-primary-fixed mb-4">
                        <span class="material-symbols-outlined text-lg">star</span><span class="material-symbols-outlined text-lg">star</span><span class="material-symbols-outlined text-lg">star</span><span class="material-symbols-outlined text-lg">star</span><span class="material-symbols-outlined text-lg">star</span>
                    </div>
                    <p class="font-body-md text-body-md text-on-surface-variant italic">"{text}"</p>
                </div>
            </div>
'''

reviews_html_part = ""
for review in reviews_data:
    reviews_html_part += review_template.format(initial=review['name'][0], name=review['name'], time=review['time'], text=review['text'])

reviews_html += reviews_html_part + reviews_html_part + '''
        </div>
    </div>
</section>
'''

html = re.sub(r'<!-- Reviews Section -->.*?<!-- Gallery Section -->', reviews_html + '<!-- Gallery Section -->', html, flags=re.DOTALL)

with open('code.html', 'w', encoding='utf-8') as f:
    f.write(html)
