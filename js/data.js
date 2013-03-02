/*global define: true */

define('data', ['knockout', 'section'], function (ko, Section) {

    'use strict';

    var data = [

            // home section
            new Section({
                id: 'home',
                parentId: '',
                label: 'Home',
                pageContent: {

                    title: '<span class="standout">ShelfHelping</span> you<br>' +
                        '<span class="yoff10 xoff4">to</span>' +
                        '<span class="standout"> make more</span> from ' +
                        '<span class="xoffmental yoff10">your</span> <span class="standout">store</span>',

                    paragraphs: [
                        {
                            text: 'You know your own business better than anyone else. ' +
                                'You know your customers, what sells and what doesn&#39;t.  You also know what ' +
                                'you want from your suppliers. Great brands, that goes without saying ' +
                                'But you&#39;ve told us you want them to really understand your business, your customers ' +
                                'and how they shop.'
                        },
                        {
                            text: 'As shoppers&#39; lives get busier and busier, convenience stores like yours ' +
                                'are ideally placed to pick up even more business. ' +
                                'Making the shopping experience easy, that&#39;s the key to greater sales. ' +
                                'And the tried and tested advice on this site will help you achieve just that.'

                        },
                        {   text: 'Concentrating on your core ranges and displaying them correctly can make a massive ' +
                            'difference to business. The ShelfHelp advice is simple to implement and requires no ' +
                            'financial investment from you. We hope you find it useful.  After all, if your ' +
                            'business improves so will ours, let us know.'
                        }
                    ]
                }
            }),


            // laundry section and children
            new Section({
                id: 'laundry',
                parentId: '',
                label: 'Laundry',
                pageContent: {

                    title: 'Make <span class="standout">more</span><br>' +
                        '<span class="xoff5 yoff10">from</span> ' +
                        '<span class="standout laundry">Laundry</span>',

                    paragraphs: [
                        {
                            text: 'We all need to wash our clothes so there will always be a need for Laundry to keep ' +
                                'the household&#39;s wardrobe clean, fresh and smart.  In convenience, Laundry is worth ' +
                                '&pound;98 million.'

                        },
                        {
                            text: 'The average Laundry shopper is a frequent and loyal customer, visiting their local ' +
                                'store 3.6 times a week and spending approximately &pound;10.90 per visit. So whilst it may ' +
                                'not be as exciting as confectionery or soft drinks, it&#39;s still an important ' +
                                'category that keeps your regulars coming back and spending more.'
                        }
                    ]
                }
            }),

            new Section({
                id: 'laundry-basics',
                parentId: 'laundry',
                key: 'basics',
                label: "Don't forget the basics",
                pageContent: {

                    title: "The <span class='standout'>Basics</span><br>" +
                        "<span class='xoff4 standout laundry'>5</span> " +
                        "<span class='xoff1 yoff10'>things to</span><br>" +
                        "<span class='xoff12 yoff10'><span class='standout'>remember</span></span>",

                    paragraphs: [
                    ],

                    bullets: [
                        {
                            text: 'Site Laundry near to Homecare and clearly layout your fixture by stages ' +
                                'of the wash, i.e. laundry additive, detergents and fabric conditioner.'
                        },
                        {
                            text: 'Availability is the single most important thing for convenience shoppers, ' +
                                'so make sure your shelves are kept full.'
                        },
                        {   text: 'Convenience shoppers want the brands they love and trust (the brands they ' +
                            'can get in leading retail stores), so make sure you&#39;re offering the best sellers.'
                        },
                        {
                            text: 'Within detergents provide a choice of formats - gel, liquitabs, liquid and powder.'
                        },
                        {
                            text: 'Locate liquitabs in centre of fixture. These are highly visible so will act ' +
                                'as a beacon for the category.'
                        }
                    ]
                }
            }),

            new Section({
                id: 'laundry-results',
                parentId: 'laundry',
                label: "Real results",
                key: 'results',
                pageContent: {

                    title: 'The <span class="standout">benefits</span> in <br>' +
                        '<span class="xoff4 laundry standout">real</span> <span class="standout">life</span>',

                    paragraphs: [
                        {
                            text: 'The benefits in real life '
                        },
                        {
                            text: 'xx '
                        }
                    ]
                }
            }),

            new Section({
                id: 'laundry-products',
                parentId: 'laundry',
                key: 'products',
                label: "Recommended products",
                pageContent: {

                    title: 'Best <span class="standout">selling</span><br>' +
                        '<span class="standout laundry xoff4">Laundry</span> <span class="yoff10">products</span>',

                    paragraphs: [
                        {
                            text: 'A best selling range is a balanced range. Laundry includes all the ' +
                                '&#39;sub-categories&#39; your shoppers need to wash their clothes; detergent, ' +
                                'conditioner and laundry additives and then within these their preferred format; ' +
                                'gels, tablets or powder. Your EPOS data will show the ranking in your store.'
                        }
                    ]
                }
            }),

            new Section({
                id: 'laundry-planograms',
                label: "Planograms",
                key: 'planograms',
                parentId: 'laundry',
                pageContent: {

                    title: 'The <span class="standout">recommended</span><br>' +
                        ' <span class="standout laundry xoff4">Laundry</span> <span class="yoff7">layout for</span><br>' +
                        '<span class="xoff12 yoff10">your store</span>',

                    paragraphs: [
                        {
                            text: 'Laundry shoppers are focused on availability and format, so make sure all the ' +
                                'products in your fixtures are easily visible by featuring signpost brands such as Daz ' +
                                'and Ariel. Group different formats (such as gels) together so shoppers can find them ' +
                                'easily and make sure your shelves are always fully stocked.'
                        },
                        {
                            text: 'Click below to find and download the ideal Laundry planogram for your store'
                        }
                    ],

                    planograms: [
                        {
                            t_caption: ['1 meter bay', '1 shelf'],
                            p_caption: 'one metre bay - one shelf'
                        },
                        {
                            t_caption: ['1 meter bay', '3 shelves'],
                            p_caption: 'one metre bay - three shelves'
                        },
                        {
                            t_caption: ['1 meter bay', '5 shelves'],
                            p_caption: 'one metre bay - five shelves'
                        },
                        {
                            t_caption: ['2 meter bay', ' 5 shelves'],
                            p_caption: 'two metre bay - five shelves'
                        }
                    ]
                }
            }),


            // baby section and children
            new Section({
                id: 'baby',
                parentId: '',
                label: 'Baby',
                pageContent: {

                    title: 'Make <span class="standout">more</span><br>' +
                        '<span class="xoff5 yoff10">from</span> ' +
                        '<span class="standout baby">Baby</span>',
                    paragraphs: [
                        {
                            text: 'With the feel-good factor created by the Jubilee and the London 2012 Olympics, a ' +
                                'baby boom is predicted in 2013. Parents with &#39;new-borns&#39; will always need ' +
                                'nappies and it&#39;s no wonder they are the biggest sellers in a Babycare category ' +
                                'worth &pound;1.62 billion nationally.'
                        }
                    ]
                }
            }),

            new Section({
                id: 'baby-basics',
                parentId: 'baby',
                key: 'basics',
                label: "Don't forget the basics",
                pageContent: {

                    title: "The <span class='standout'>Basics</span><br>" +
                        "<span class='xoff4 standout baby'>5</span> " +
                        "<span class='xoff1 yoff10'>things to</span><br>" +
                        "<span class='xoff12 yoff10'><span class='standout'>remember</span></span>",

                    paragraphs: [
                    ],

                    bullets: [
                        {
                            text: 'It&#39;s a highly planned purchase category so the right range of brands and sizes ' +
                                'is essential'
                        },
                        {
                            text: 'Site Babycare near to health &amp; beauty. This is where customers expect to find ' +
                                'Babycare and often need products from both these categories.'
                        },
                        {
                            text: 'Always stock the best-selling lines, e.g. Pampers Baby Dry Nappies, and clearly ' +
                                'segment lines by subcategory, e.g. nappies, wipes, toiletries.'
                        },
                        {
                            text: 'Mums can&#39;t get by without nappies, baby milk and baby food so the top priority ' +
                                'for shoppers here is availability'
                        },
                        {
                            text: 'Did you know that on average babies spend the most time (12 months) in size 4/4+ ' +
                                'nappies?  Ensure 100&#37; availability of key size 4/4+ and/or include bigger bigger sizes ' +
                                'e.g. size 5.'
                        }
                    ]
                }
            }),

            new Section({
                id: 'baby-results',
                parentId: 'baby',
                key: 'results',
                label: "Real results",
                pageContent: {

                    title: 'The <span class="standout">benefits</span> in <br>' +
                        '<span class="xoff4 baby standout standout">real</span> <span class="standout">life</span>',

                    paragraphs: [
                        {
                            text: 'The benefits in real life'
                        },
                        {
                            text: 'xx '
                        }
                    ]
                }
            }),

            new Section({
                id: 'baby-products',
                parentId: 'baby',
                key: 'products',
                label: "Recommended products",
                pageContent: {

                    title: 'Best <span class="standout">selling</span><br>' +
                        '<span class="standout baby xoff4">Baby</span> <span class="yoff10">products</span>',

                    paragraphs: [
                        {
                            text: 'Babycare is a highly planned purchase, so the right range is vital. It is important ' +
                                'to have a full breadth of range to include all nappy sizes. Research has proven that ' +
                                'if the nappy size a customer needs is not available, a size up or down is of no use ' +
                                'and they will buy elsewhere which often means leaving a store completely empty ' +
                                'handed. Retailers should focus on stocking key sizes 4/4+.'
                        }
                    ]
                }
            }),

            new Section({
                id: 'baby-planograms',
                parentId: 'baby',
                label: "Planograms",
                key: 'planograms',
                pageContent: {

                    title: 'The <span class="standout">recommended</span><br>' +
                        ' <span class="standout baby xoff4">Baby</span> <span class="yoff7">layout for<br>' +
                        '<span class="xoff12 yoff10">your store</span>',

                    paragraphs: [
                        {
                            text: 'Display Babycare near Health &amp; Beauty. These categories are often purchased ' +
                                'together. Our shopper research shows that when shopping for nappies, people look first ' +
                                'for their brand of choice and then the nappy size. Block by subcategory, brand and ' +
                                'then by size for nappies and flavour for baby food.'
                        },
                        {
                            text: 'Click below to find and download the ideal Babycare planogram for your store'
                        }
                    ],

                    planograms: [
                        {
                            t_caption: ['1 meter bay', '1 self'],
                            p_caption: 'one metre bay - one shelf'
                        },
                        {
                            t_caption: ['1 meter bay', '3 shelves'],
                            p_caption: 'one meter bay - threes shelves'
                        },
                        {
                            t_caption: ['1 meter bay', '5 shelves'],
                            p_caption: 'one meter bay - five shelves'
                        }
                    ]
                }
            }),


            // homecare section and children
            new Section({
                id: 'homecare',
                parentId: '',
                label: 'Homecare',
                pageContent: {

                    title: 'Make <span class="standout">more</span><br>' +
                        '<span class="xoff5 yoff10">from</span> ' +
                        '<span class="standout homecare">Homecare</span>',

                    paragraphs: [
                        {
                            text: 'Put simply, Homecare covers everything needed to keep all the rooms in your house ' +
                                'clean. And whether your shopper is a frequent or an occasional cleaner they will need ' +
                                'the right products to do the job, so a broad range of best sellers is a good principle ' +
                                'to follow.'
                        },
                        {
                            text: 'The average Homecare shopper visits their local store four times a week ' +
                                'spending on average &pound;37.91, so they are an extremely valuable and loyal ' +
                                'customer. Put into context, the Homecare category is worth &pound;1.5bn  nationally, ' +
                                'and is in growth. It includes six main sub-categories which play a key role for ' +
                                'top-up and distress shopping missions; dish care, air care, surface care, toilet ' +
                                'care, bleach and polish.'
                        }
                    ]
                }
            }),

            new Section({
                id: 'homecare-basics',
                parentId: 'homecare',
                key: 'basics',
                label: "Don't forget the basics",
                pageContent: {

                    title: "The <span class='standout'>Basics</span><br>" +
                        "<span class='xoff4 standout homecare'>5</span> " +
                        "<span class='xoff1 yoff10'>things to</span><br>" +
                        "<span class='xoff12 yoff10'><span class='standout'>remember</span></span>",

                    paragraphs: [
                    ],

                    bullets: [
                        {
                            text: 'Site Homecare near to Laundry. The shopper is typically in the same mind set and ' +
                                'often on a cleaning mission'
                        },
                        {
                            text: 'Clearly layout your fixture by room, i.e. kitchen and bathroom and then by product ' +
                                'task, i.e. dishes, surfaces etc.'
                        },
                        {
                            text: 'Stock the brand leaders in each sub-category such as Fairy Liquid and Flash to help ' +
                                'shoppers identify the product they need.'
                        },
                        {
                            text: 'Availability is the most important thing for shoppers. Make sure your shelves are ' +
                                'kept full to allow shoppers to easily find and pick up the product they need.'
                        },
                        {
                            text: 'Site wipes near sprays, and bin bags and cloths near the fixture to encourage ' +
                                'cross purchasing.'
                        }
                    ]
                }
            }),

            new Section({
                id: 'homecare-results',
                parentId: 'homecare',
                label: "Real results",
                key: 'results',
                pageContent: {

                    title: 'The <span class="standout">benefits</span> in <br>' +
                        '<span class="xoff4 baby homecare standout">real</span> <span class="standout">life</span>',

                    paragraphs: [
                        {
                            text: 'The benefits in real life '
                        },
                        {
                            text: 'xx '
                        }
                    ]
                }
            }),

            new Section({
                id: 'homecare-products',
                parentId: 'homecare',
                key: 'products',
                label: "Recommended products",
                pageContent: {

                    title: 'Best <span class="standout">selling</span><br>' +
                        '<span class="standout homecare xoff4">Homecare</span> <span class="yoff10">products</span>',

                    paragraphs: [
                        {
                            text: 'Within Homecare, it is important to stock the key brands such as Flash and Fairy ' +
                                'Liquid and if space allows also offer a range of value or own label products. The ' +
                                'best sellers help shoppers identify the category and then navigate to the sub ' +
                                'categories to find the specific product for the job.'
                        }

                    ]
                }
            }),

            new Section({
                id: 'homecare-planograms',
                parentId: 'homecare',
                label: "Planograms",
                key: 'planograms',
                pageContent: {

                    title: 'The <span class="standout">recommended</span><br>' +
                        ' <span class="standout homecare xoff4">Homecare</span> <span class="yoff7">layout for<br>' +
                        '<span class="xoff12 yoff10">your store</span>',

                    paragraphs: [
                        {
                            text: 'Range, clarity, availability and good display are key to maximising the opportunity.' +
                                'Site Homecare near to Laundry and clearly layout your fixture by room, i.e. kitchen ' +
                                'and bathroom and then by product task, i.e. dishes, surfaces etc. to help shoppers ' +
                                'navigate what is a complex category.'
                        },
                        {
                            text: 'Click below to find and download the ideal homecare planogram for your store'
                        }
                    ],

                    planograms: [
                        {
                            t_caption: ['1 meter bay', '1 shelf'],
                            p_caption: 'one meter bay - one shelf' ,

                            shelves: [

                                [
                                    {caption: 'Domestos Bleach Original 750ml'},
                                    {caption: 'Toilet Duck Ocean Force'},
                                    {caption: 'Dettol Disinfectant 500ml'},
                                    {caption: 'Air Wick Spray 4in1 Lavender 300ml'},
                                    {caption: 'Febreze Mist & Refresh Cotton 300ml'},
                                    {caption: 'Mr Sheen Polish 300ml Spring'},
                                    {caption: 'Flash Bathroom Spray 500ml'},
                                    {caption: 'Flash Spray with Bleach 500ml'},
                                    {caption: 'Flash All Purpose  Liquid Lemon 500ml'},
                                    {caption: 'Fairy Liquid Original 433ml'},
                                    {caption: 'Finish D\Wash All In One P\Ball Tabs 28'}
                                ]
                            ]
                        },
                        {
                            t_caption: ['1 meter bay', '3 shelves'],
                            p_caption: 'one meter bay - three shelves',

                            shelves: [

                                [
                                    {caption: 'Own label Washing Up Liquid 500ml'},
                                    {caption: 'Fairy Liquid Pomegranate 450ml'},
                                    {caption: 'Fairy Liquid Original 433ml'},
                                    {caption: 'Fairy Liquid Lemon 433ml'},
                                    {caption: 'Fairy ADW Active Burst 20s Lemon'},
                                    {caption: 'Finish D-Wash All In One P-Ball Tabs 28'},
                                    {caption: 'Mr Muscle Oven Cleaner 300ml'},
                                    {caption: 'Mr Muscle Sink & Plus Unblocker 500ml'},
                                    {caption: 'Cillit Bang Spray 750ml'},
                                ],

                                [
                                    {caption: 'Glade Block Lilly of the Valley'},
                                    {caption: 'Air Wick Spray 4in1 Lavender 300ml'},
                                    {caption: 'Febreze Mist & Refresh Cotton 300ml'},
                                    {caption: 'Febreze Mist & Refresh Blossom 300ml'},
                                    {caption: 'Mr Sheen Polish 300ml Spring'},
                                    {caption: 'Flash Wipe & Go Lemon 30s'},
                                    {caption: 'Flash Spray with Bleach 500ml'},
                                    {caption: 'Dettol Antibac Surface Spray 500ml'},
                                    {caption: 'Flash  Multisurface Spray 500ml Cotton with Febreze'},
                                    {caption: 'Flash Multisurface Spray 500ml Lemon'},
                                    {caption: 'Flash All Purpose  Liquid Cotton with Febreze 500ml'},
                                    {caption: 'Flash All Purpose  Liquid Lemon 500ml'},
                                ],

                                [
                                    {caption: 'OL  Bleach Citrus 750ml'},
                                    {caption: 'Domestos Bleach Original 750ml'},
                                    {caption: 'Toilet Duck 750ml Ocean Force'},
                                    {caption: 'Dettol Disinfectant 500ml'},
                                    {caption: 'Jeyes Bloo Max 75g'},
                                    {caption: 'Cif Cream Lemon 500ml'},
                                    {caption: 'Cif Power Cream Bathroom 750ml'},
                                    {caption: 'Flash Bathroom Spray 500ml'},
                                    {caption: 'Viakal Lime scale Remover Spray 500ml'},
                                    {caption: 'SPACE ALLOCATED FOR BIN BAGS/DISH CLOTHS'},
                                ]
                            ]

                        },
                        {
                            t_caption: ['1 meter bay', '5 shelves'],
                            p_caption: 'one meter bay - five shelves',
                            shelves: [

                                [
                                    {caption: 'shelf 1 item 0'},
                                    {caption: 'shelf 1 item 1'},
                                    {caption: 'shelf 1 item 2'},
                                    {caption: 'shelf 1 item 3'},
                                    {caption: 'shelf 1 item 4'},
                                    {caption: 'shelf 1 item 5'},
                                    {caption: 'shelf 1 item 6'},
                                    {caption: 'shelf 1 item 7'},
                                    {caption: 'shelf 1 item 8'},
                                    {caption: 'shelf 1 item 9'}
                                ],

                                [
                                    {caption: 'shelf 2 item 0'},
                                    {caption: 'shelf 2 item 1'},
                                    {caption: 'shelf 2 item 2'},
                                    {caption: 'shelf 2 item 3'},
                                    {caption: 'shelf 2 item 4'},
                                    {caption: 'shelf 2 item 5'},
                                    {caption: 'shelf 2 item 6'},
                                    {caption: 'shelf 2 item 7'},
                                    {caption: 'shelf 2 item 8'}
                                ],

                                [
                                    {caption: 'shelf 3 item 0'},
                                    {caption: 'shelf 3 item 1'},
                                    {caption: 'shelf 3 item 2'},
                                    {caption: 'shelf 3 item 3'},
                                    {caption: 'shelf 3 item 4'},
                                    {caption: 'shelf 3 item 5'},
                                    {caption: 'shelf 3 item 6'},
                                    {caption: 'shelf 3 item 7'},
                                    {caption: 'shelf 3 item 8'},
                                    {caption: 'shelf 3 item 9'}
                                ],

                                [
                                    {caption: 'shelf 4 item 0'},
                                    {caption: 'shelf 4 item 1'},
                                    {caption: 'shelf 4 item 2'},
                                    {caption: 'shelf 4 item 3'},
                                    {caption: 'shelf 4 item 4'},
                                    {caption: 'shelf 4 item 5'},
                                    {caption: 'shelf 4 item 6'}
                                ],

                                [
                                    {caption: 'shelf 5 item 0'},
                                    {caption: 'shelf 5 item 1'},
                                    {caption: 'shelf 5 item 2'},
                                    {caption: 'shelf 5 item 3'},
                                    {caption: 'shelf 5 item 4'},
                                    {caption: 'shelf 5 item 5'},
                                    {caption: 'shelf 5 item 6'},
                                    {caption: 'shelf 5 item 7'},
                                    {caption: 'shelf 5 item 8'}
                                ]

                            ]
                        },
                        {
                            t_caption: ['2 meter bay', ' 5 shelves'],
                            p_caption: 'two meter bay - five shelves'


                        }
                    ]
                }
            }),


            // health section and children
            new Section({
                id: 'health',
                parentId: '',
                label: 'Health &amp; Beauty',
                pageContent: {

                    title: 'Make <span class="standout">more</span><br>' +
                        '<span class="xoff1 yoff10">from</span> ' +
                        '<span class="standout-smaller health">Health &amp; Beauty</span>',

                    paragraphs: [
                        {
                            text: 'The desire to stay healthy and beautiful is as old as civilisation itself, so there ' +
                                'is always a need for &#39;products&#39;. Whilst space in your store may not allow ' +
                                'you to be a specialist in this category, improvements can be made by having a core ' +
                                'range of products that reach out to all your shoppers; young and old, male and ' +
                                'female. Moreover, having a great range for all your customers will drive footfall ' +
                                'and purchase across other categories.'
                        }
                    ]
                }
            }),

            new Section({
                id: 'health-basics',
                parentId: 'health',
                key: 'basics',
                label: "Don't forget the basics",
                pageContent: {

                    title: "The <span class='standout'>Basics</span><br>" +
                        "<span class='xoff4 standout health'>5</span> " +
                        "<span class='xoff1 yoff10'>things to</span><br>" +
                        "<span class='xoff12 yoff10'><span class='standout'>remember</span></span>",

                    paragraphs: [
                    ],

                    bullets: [
                        {
                            text: 'Let shoppers know you stock Health & Beauty by using POS in store and display it ' +
                                'within the first third of a store. 1 in 5 convenience shoppers don&#39;t know their ' +
                                'local store stocks Health &amp; Beauty products.'
                        },
                        {
                            text: 'Within the category clearly segment by sub-category for ease of shop, e.g. haircare ' +
                                'and oralcare. Shoppers who can&#39;t find something may assume you don&#39;t sell it.'
                        },
                        {
                            text: 'Create a female area, e.g. feminine hygiene, skincare, female hair removal and ' +
                                'merchandise away from men&#39;s toiletries where possible.'
                        },
                        {
                            text: 'Merchandise shampoo with its corresponding branded conditioner.'
                        },
                        {
                            text: 'Health &amp; Beauty should be clearly differentiated from the rest of the store, ' +
                                'to show your shoppers you stock the category.'
                        }
                    ]
                }
            }),

            new Section({
                id: 'health-results',
                parentId: 'health',
                label: "Real results",
                key: 'results',
                pageContent: {

                    title: 'The <span class="standout">benefits</span> in <br>' +
                        '<span class="xoff4 health standout">real</span> <span class="standout">life</span>',

                    paragraphs: [
                        {
                            text: 'The benefits in real life '
                        },
                        {
                            text: 'xx '
                        }
                    ]
                }
            }),

            new Section({
                id: 'health-products',
                parentId: 'health',
                key: 'products',
                label: "Recommended products",
                pageContent: {

                    title: 'Best <span class="standout">selling</span><br>' +
                        '<span class="standout health xoff4">Health &amp; Beauty</span> <br><span class="xoff12 yoff10">products</span>',

                    paragraphs: [
                        {
                            text: 'As Health &amp; Beauty is a highly personal category, it is important to stock ' +
                                'something for everyone. The range should include the best selling lines from each ' +
                                'sub-category to cater for the most common Health &amp; Beauty needs for all your ' +
                                'shoppers.'
                        }
                    ]
                }
            }),

            new Section({
                id: 'health-planograms',
                parentId: 'health',
                label: "Planograms",
                key: 'planograms',
                pageContent: {

                    title: 'The <span class="standout">recommended</span><br>' +
                        '<span class="standout health xoff4">Health &amp; Beauty</span><br>' +
                        '<span class="xoff12 yoff10">layout for your <span class="standout-smaller">store</span></span>',

                    paragraphs: [
                        {
                            text: 'Site Health &amp; Beauty products within the first third of a store and then ' +
                                'clearly segment by sub-category, e.g. haircare and oralcare. Furthermore, create ' +
                                'separate and adjacent areas for female Health &amp; Beauty and male toiletries. This ' +
                                'split immediately helps shoppers find what they want.'
                        },
                        {
                            text: 'Click below to find and download the ideal Health &amp; Beauty planogram for your store'
                        }
                    ],

                    planograms: [
                        {
                            t_caption: ['1 meter bay', '1 shelf'],
                            p_caption: 'one meter bay - one shelf'
                        },

                        {
                            t_caption: ['1 meter bay', '3 shelves'],
                            p_caption: 'one meter bay - three shelves'
                        },
                        {
                            t_caption: ['1 meter bay', '5 shelves'],
                            p_caption: 'one meter bay - five shelves'
                        },
                        {
                            t_caption: ['2 meter bay', ' 5 shelves'],
                            p_caption: 'two meter bay - five shelves'
                        }
                    ]
                }
            }),


            // batteries section and children
            new Section({
                id: 'batteries',
                parentId: '',
                label: 'Batteries',
                pageContent: {

                    title: 'Make <span class="standout">more</span><br>' +
                        '<span class="xoff5 yoff10">from</span> ' +
                        '<span class="standout batteries">Batteries</span>',

                    paragraphs: [
                        {
                            text: 'Batteries have a high penetration in UK households. 98&#37; of us use them ' +
                                'regularly. There is always a gadget, toy or device that needs to be powered. But ' +
                                'because they are not always top of mind for the weekly or top up shop, shoppers ' +
                                'often forget they need them. Often when a shopper sees them in store, they realise ' +
                                'they need some for the remote control at home.'
                        },
                        {
                            text: 'Working closely with retailers, Duracell has identified that visibility and ' +
                                'availability are key to driving battery sales. The familiar copper and black of ' +
                                'Duracell is instantly identifiable and a mark of trust for battery shoppers across ' +
                                'the country.'
                        }
                    ]
                }
            }),

            new Section({
                id: 'batteries-basics',
                parentId: 'batteries',
                key: 'basics',
                label: "Don't forget the basics",
                pageContent: {

                    title: "The <span class='standout'>Basics</span><br>" +
                        "<span class='xoff4 standout batteries'>5</span> " +
                        "<span class='xoff1 yoff10'>things to</span><br>" +
                        "<span class='xoff12 yoff10'><span class='standout'>remember</span></span>",

                    paragraphs: [
                    ],

                    bullets: [
                        {
                            text: 'Batteries is a highly impulsive category, so visibility and displays are crucial. ' +
                                'If your shoppers can see them, sales will follow.'
                        },
                        {
                            text: 'Always stock a core range of key Batteries. Think the five key standard sizes that ' +
                                'most electrical goods take - AA, AAA, C, D and 9v.'
                        },
                        {
                            text: 'Of the core range, allocate the most space to the best selling lines - AA and AAA ' +
                                'as your shoppers will have more of a need for these.'
                        },
                        {
                            text: 'Shoppers tell us they forget to include batteries on their shopping lists so they ' +
                                'need to be reminded in store - so make them visible.'
                        },
                        {
                            text: 'With all the electrical toys and gifts bought at Christmas, this is a key period ' +
                                'for Batteries. 40&#37; of all Batteries are sold during October, November and December ' +
                                'and the first two weeks in January. Clear and prominent displays during this period ' +
                                'will help you sell more.'
                        }
                    ]
                }
            }),

            new Section({
                id: 'batteries-results',
                parentId: 'batteries',
                key: 'results',
                label: "Real results",
                pageContent: {

                    title: 'The <span class="standout">benefits</span> in <br>' +
                        '<span class="xoff4 batteries homecare standout">real</span> <span class="standout">life</span>',

                    paragraphs: [
                        {
                            text: 'The benefits in real life '
                        },
                        {
                            text: 'xx '
                        }
                    ]
                }
            }),

            new Section({
                id: 'batteries-products',
                parentId: 'batteries',
                key: 'products',
                label: "Recommended products",
                pageContent: {

                    title: 'Best <span class="standout">selling</span><br>' +
                        '<span class="standout batteries xoff4">Batteries</span> <span class="yoff10">products</span>',

                    paragraphs: [
                        {
                            text: 'With Batteries, it&#39;s easier to identify the best sellers if you just think which ' +
                                'size most of your electrical appliances use - AA and AAA. Furthermore, the familiar ' +
                                'copper and black of Duracell is instantly identifiable and the brand leader.'
                        }
                    ]
                }
            }),

            new Section({
                id: 'batteries-planograms',
                parentId: 'batteries',
                label: "Planograms",
                key: 'planograms',
                pageContent: {

                    title: 'The <span class="standout">recommended</span><br>' +
                        ' <span class="standout batteries xoff4">Batteries</span> layout for<br>' +
                        '<span class="xoff12 yoff10">your store</span>',


                    paragraphs: [
                        {
                            text: 'Signpost the main fixture with branding to help visibility in store. Our shopper ' +
                                'research finds that 50&#37; of shoppers expect to find Batteries behind the counter, ' +
                                'so site them clearly in a prominent position, and/or on clip strips.'
                        },
                        {
                            text: 'Click below to find and download the ideal Batteries planogram for your store'
                        }
                    ],

                    planograms: [
                        {
                            t_caption: '3 x 2 pegboard',
                            p_caption: 'The ideal shelf layout according to the size of your Battery'
                        },
                        {
                            t_caption: '3 x 3 pegboard',
                            p_caption: 'The ideal shelf layout according to the size of your Battery'
                        },
                        {
                            t_caption: '4 x 3 pegboard',
                            p_caption: 'The ideal shelf layout according to the size of your Battery'
                        },
                        {
                            t_caption: '4 x 5 pegboard',
                            p_caption: 'The ideal shelf layout according to the size of your Battery'
                        }
                    ]
                }
            }),


            // info section
            new Section({
                id: 'info',
                parentId: '',
                label: 'More info',
                pageContent: {

                    title: 'More info',

                    paragraphs: [
                        {
                            text: ''
                        },
                        {
                            text: ''
                        }
                    ]
                }
            })
        ],



        // functions - no editable data below here...

        sectionById = function (id) {
            return ko.utils.arrayFirst(data, function (section) {
                return section.id === id;
            });
        },

        parentSections = function () {
            return ko.utils.arrayFilter(data, function (section) {
                return !section.parentId;
            });
        },

        productSections = function () {
            return ko.utils.arrayFilter(data, function (section) {
                return !section.parentId && section.id !== 'home' && section.id !== 'info';
            });
        },

        subSections = function () {
            return ko.utils.arrayFilter(data, function (section) {
                return section.parentId;
            });
        },

        subSectionsForParent = function (parent) {
            if (parent) {
                return ko.utils.arrayFilter(data, function (section) {
                    return section.parentId === parent.id;
                });
            }
        },

        parentSectionPosition = function (section) {
            return parentSections().indexOf(section);
        },

        sectionPosition = function (section) {
            return data.indexOf(section);
        },

        prevSection = function (section) {
            return parentSections()[parentSectionPosition(section) - 1];
        },

        nextSection = function (section) {
            return parentSections()[parentSectionPosition(section) + 1];
        },

        planograms = function () {

            var planograms = [], kount;

            ko.utils.arrayFilter(subSections(), function(section) {
                if (section.key === 'planograms') {
                    kount = 0;
                    ko.utils.arrayForEach(section.pageContent.planograms, function(item) {
                        planograms.push({
                            section: section.parentId,
                            p_caption: item.p_caption,
                            t_caption: item.t_caption,
                            position: kount
                        });
                        kount++;
                    });
                }
            });

            return planograms;
        };

    return {
        data: data,
        parentSections: parentSections,
        subSections: subSections,
        subSectionsForParent: subSectionsForParent,
        sectionById: sectionById,
        sectionPosition: sectionPosition,
        parentSectionPosition: parentSectionPosition,
        productSections: productSections,
        prevSection: prevSection,
        nextSection: nextSection,
        planograms: planograms
    };

});