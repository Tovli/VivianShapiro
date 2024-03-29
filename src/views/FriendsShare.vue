<template>
    <div>
        
        <div id="friendsCarousel" class="carousel" data-interval="false">
            <div class="carousel-inner">
                
                <div v-for="(item, index) in carouselItems" :key="index" :class="['carousel-item', { active: index === 0 }]">
                    <img :src="item.image" class="d-block w-100" alt="Carousel Image">
                    <div class="carousel-caption">
                        <h3>{{ item.title }}</h3>
                        
                        <div v-html="item.description"></div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#friendsCarousel" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#friendsCarousel" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'FriendsShare',

    data() {
        return {
            carouselItems: [
                {
                    image: require('@/assets/images/FriendsJudy.png'),
                    title: 'Judy',
                    description: `<p>Vivian - your name comes from the Latin for "life" - and that was your essence - lively, animated, happy, enthusiastic.</p>
  
  <p>Friends? From all stages of your life - and as it seems - each of your wonderful friends saw you as his or her <strong>BEST FRIEND</strong>. And that is how you treated each one - as special! You travelled far and wide to visit each one, with unique gifts for each.
    You were a "Tiger Mother" - protecting your children and grandchildren, smoothing their way through life. You were a private "Meals-on-Wheels" company - vegetarian, gluten-free, vegan, meat - you had a recipe for all dietary concerns.</p>
    <p>Just two weeks ago, you gloried in taking your grandson Yogev to a chocolate workshop - just the two of you. His 6th birthday cake was a fabulous creation - a soccer field, complete with players and goalposts. Your precious granddaughter Kamami – as you loved to call her - for whom you painted a wooden dollhouse - the two of you had such fun playing dolls together.
    You were so proud of each of your children: Yoel, Leor, Timna, and Alon - their talents, their lives - you took a very active role and loved planning family events, occasions, and holidays.</p>
    <p>Let us not forget your joy at the upcoming wedding – each part of the plan was carried out with precision and consideration for the smallest details. You were bubbling over and thrilled that you'd see your brother Tony and your sister-in-law Carol. You worried about each guest and wanted all the details to be exactly right.
    Your life was filled with the colors of the rainbow - in your bright clothing, your own beautiful handicrafts that decorated your lovely home.</p>
    <p>And your love for animals - just recently Kama named your newest cat "Toffee".
    You have left everything in the middle, and your beloved family is bereft. You gave them 6 short days to surround you with love, so that they could get accustomed to the idea that they would need to part from you.
    We, your grieving friends, will try to live up to your standards, and will give every support to your precious family.</p>
    <p>Rest easy, dearest Viv -<br>
  Always and ever,<br>
  Judy</p>`,
                },
                {
                    image: require('@/assets/images/FriendsJudy.png'),
                    title: 'Inbal & Tamar Bar Haim',
                    description: `<p>To Yoel, Leor, Timna and Alon.</p>
<p>I'm so sorry to hear about your mum.</p>
<p>She was always so cheerful and warm to me. I remember the
days you lived next to us and we used to give each other pet
food if we ran out, she made me feel normal for loving dogs and
cats so much. I saw her when I visited Israel this year, she was
lovely as usual and made me feel welcomed. Love to all the
family,</p>
<p>thinking of you guys from far away New Zealand.
Tamar and Inbal Bar-Haim</p>`,
                },
                {
                    image: require('@/assets/images/FriendsJudy.png'),
                    title: 'דורית רוחס',
                    description: `<p>יואל, ליאור תימי ואלון היקרים! )אזכרה לויוי 24.5.19</p>
<p>עברו כמעט חודשיים, חודשיים מהבום שהרעיד את השמיים
ואז שקט...השקט שנשאר חודר מלמעלה למטה
מנסה להרגיע את הסערה שהשאירה,</p>
<p>את ויוי ניתן לתאר:
כלב אחד גדול !!! לב זהב שתמיד אהב!!
אהבה את ילדיה, נכדיה, את תלמידיה, את בעלי החיים שאימצה לליבה.
קיבלה כל אחד ואחד על מעלותיו ומגרעותיו תמיד בחיוך וברגישות אין קץ
אך עכשיו הלב...הוא אינו נמצא, הוא עזב…</p>
<p>חיינו יחד בשכנות כ 15- שנה
בכינו אחת על כתפי השנייה,
שמחנו כעסנו, אהבנו וחלקנו חוויות
היית לי כאחות גדולה!!
רואה אותך מביתי כמעט בכל פינה,
כאשר פותחת את חלון המטבח-רואה אותך!!
כאשר פותחת את דלת הכניסה שומעת את קולך!!
כל כך הרבה פעמים אני מרגישה
שאמנם הלכת, אך את כל כך נוכחת!!!
פעמים רבות דובר על הסדר המיוחד בעולם
על גדולתו וקדושתו של מי שדואג לכולם
בכל פעם הלב מסרב להאמין
שההוא מלמעלה עושה בדיוק רב את מה שהוא מבין</p>
<p>יואל, ליאור תימי ואלון היקרים אתם חלק ממשפחתי מאז ובעיקר מהיום.</p>
<p>ויוי - את שם אבל את כאן...בליבי את כל הזמן!!</p>
<p>מתגעגעת, דורית רוחס</p>`,
                },
            ],
        };
    },
};
</script>

<style>

.carousel {
    width: 100%;
    height: 100%;
}

.carousel-inner {
    height: 100%;                    
}

.carousel-item {
    height: 100%;
}

.carousel-caption {
    color: #000000;
}
</style>