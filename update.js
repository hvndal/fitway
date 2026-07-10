const fs = require('fs');

let html = fs.readFileSync('code.html', 'utf8');

const googleSvg = `<svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>`;

const reviewsData = [
    {name: "Renu Renu", time: "2 months ago", text: "Fitway Gym stands out for its professionalism and quality service. The gym is well-equipped hygienic and offers a great workout atmosphere. The staff is cooperative and ensures proper guidance.", photo: "https://randomuser.me/api/portraits/women/44.jpg"},
    {name: "Sujal Soni", time: "2 months ago", text: "Hands down the best gym in Sector 67. The equipment is top-notch, the space is always clean, and the vibe is incredibly motivating! Perfectly located near CP67 Mall.", photo: "https://randomuser.me/api/portraits/men/32.jpg"},
    {name: "Akhil Negi", time: "a month ago", text: "Amazing gym with great equipment, a motivating atmosphere, and supportive trainers. Highly recommended! All trainer are good but nikhil sir is good trainer.", photo: "https://randomuser.me/api/portraits/men/46.jpg"},
    {name: "Prashant Chauhan", time: "a month ago", text: "The staff is always friendly, professional, and ready to help. Excellent customer service and a very welcoming atmosphere. The staff keeps the gym clean, organized, and enjoyable to use.", photo: "https://randomuser.me/api/portraits/men/22.jpg"},
    {name: "Aaditya Sharma", "time": "a month ago", text: "I’ve had a great experience at this fit way gym. The environment is clean, well-maintained, and very motivating for anyone focused on fitness. The equipment is modern and always in good condition.", photo: "https://randomuser.me/api/portraits/men/11.jpg"}
];

const reviewTemplate = `
            <div class="brutalist-border bg-background p-8 min-w-[400px] max-w-[400px] flex-shrink-0 flex flex-col justify-between">
                <div>
                    <div class="flex justify-between items-start mb-4">
                        <div class="flex items-center gap-3">
                            <img src="{photo}" class="w-10 h-10 rounded-full object-cover" alt="{name}" />
                            <div>
                                <div class="font-label-bold text-label-bold text-primary uppercase">{name}</div>
                                <div class="font-body-md text-on-surface-variant text-sm">{time}</div>
                            </div>
                        </div>
                        ${googleSvg}
                    </div>
                    <div class="flex text-primary-fixed mb-4">
                        <span class="material-symbols-outlined text-lg" style="font-variation-settings: 'FILL' 1;">star</span><span class="material-symbols-outlined text-lg" style="font-variation-settings: 'FILL' 1;">star</span><span class="material-symbols-outlined text-lg" style="font-variation-settings: 'FILL' 1;">star</span><span class="material-symbols-outlined text-lg" style="font-variation-settings: 'FILL' 1;">star</span><span class="material-symbols-outlined text-lg" style="font-variation-settings: 'FILL' 1;">star</span>
                    </div>
                    <p class="font-body-md text-body-md text-on-surface-variant italic">"{text}"</p>
                </div>
            </div>`;

let reviewsHtmlPart = "";
for (const review of reviewsData) {
    let part = reviewTemplate.replace(/{photo}/g, review.photo)
                             .replace(/{name}/g, review.name)
                             .replace(/{time}/g, review.time)
                             .replace(/{text}/g, review.text);
    reviewsHtmlPart += part;
}

const fullReviewsHtml = `
        <div class="animate-marquee gap-6 px-4 hover:cursor-pointer">
            <!-- Reviews -->${reviewsHtmlPart}
            
            <!-- Duplicated for infinite scroll effect -->
            <!-- Reviews -->${reviewsHtmlPart}
        </div>
    </div>
</section>
`;

const startIndex = html.indexOf('<div class="animate-marquee gap-6 px-4 hover:cursor-pointer">');
const endIndex = html.indexOf('</section>', startIndex) + '</section>'.length;

if (startIndex !== -1 && endIndex !== -1) {
    html = html.substring(0, startIndex) + fullReviewsHtml + html.substring(endIndex);
    fs.writeFileSync('code.html', html, 'utf8');
    console.log("Successfully updated reviews");
} else {
    console.log("Could not find reviews section");
}
