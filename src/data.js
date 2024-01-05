export const data = {
  statusCode: 0,
  data: {
    statusMessage: "done successfully",
    pageOffset: {
      nextOffset: "CMM/EOskKIDwrfXj6ebKajCdEjgB",
      widgetOffset: {
        restaurantCountWidget: "",
        collectionV5RestaurantListWidget_SimRestoRelevance_food: "11",
        inlineFacetFilter: "",
        collectionV5MastheadWidget: "",
      },
    },
    cards: [
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.gandalf.widgets.v2.CollectionMasthead",
            collectionId: "80426",
            title: "Dosa",
            description:
              "Satisfy your cravings for South Indian breakfast with these crispy & buttery Dosas.",
            imageId:
              "v1674029948/PC_Creative%20refresh/3D_bau/collections_new/Dosa.png",
            aspectRatio: "3.44",
            cta: {
              link: "swiggy://collectionV2?collection_id=80426&tags=layout_CCS_Dosa,ads_pc_dosa,dosa,layout_BAU_Contextual",
              type: "collectionv2",
            },
            type: "COLLECTION_MASTHEAD_TYPE_IMAGE_WITH_TEXT",
            count: "177 restaurants",
          },
        },
      },
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.gandalf.widgets.v2.InlineViewFilterSortWidget",
            sortConfigs: [
              {
                key: "relevance",
                title: "Relevance (Default)",
                selected: true,
                defaultSelection: true,
              },
              {
                key: "deliveryTimeAsc",
                title: "Delivery Time",
              },
              {
                key: "modelBasedRatingDesc",
                title: "Rating",
              },
              {
                key: "costForTwoAsc",
                title: "Cost: Low to High",
              },
              {
                key: "costForTwoDesc",
                title: "Cost: High to Low",
              },
            ],
            restaurantCount: 177,
            facetList: [
              {
                label: "Veg/Non-veg",
                id: "isVeg",
                selection: "SELECT_TYPE_SINGLESELECT",
                facetInfo: [
                  {
                    label: "Pure veg",
                    id: "isVegfacetquery2",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Non Veg",
                    id: "isVegfacetquery3",
                    analytics: {},
                  },
                ],
                viewType: "VIEW_TYPE_FLATTENED",
                subLabel: "Filter by",
              },
              {
                label: "Delivery Time",
                id: "deliveryTime",
                selection: "SELECT_TYPE_SINGLESELECT",
                facetInfo: [
                  {
                    label: "Less than 30 mins",
                    id: "deliveryTimefacetquery2",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Less than 45 mins",
                    id: "deliveryTimefacetquery3",
                    analytics: {},
                  },
                ],
                viewType: "VIEW_TYPE_FLATTENED",
                subLabel: "Filter by",
              },
              {
                label: "Cost for two",
                id: "costForTwo",
                selection: "SELECT_TYPE_MULTISELECT",
                facetInfo: [
                  {
                    label: "Rs. 300-Rs. 600",
                    id: "costForTwofacetquery3",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Greater than Rs. 600",
                    id: "costForTwofacetquery4",
                    analytics: {},
                  },
                  {
                    label: "Less than Rs. 300",
                    id: "costForTwofacetquery5",
                    analytics: {},
                    openFilter: true,
                  },
                ],
                viewType: "VIEW_TYPE_HALF_CARD",
                subLabel: "Filter by",
              },
            ],
          },
        },
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
            layout: {
              rows: 1,
              widgetPadding: {
                left: 16,
                top: 20,
                right: 16,
                bottom: 16,
              },
              scrollBar: {},
              widgetTheme: {
                defaultMode: {
                  backgroundColour: "#FFFFFF",
                  theme: "THEME_TYPE_LIGHT",
                },
                darkMode: {
                  backgroundColour: "#1B3028",
                  theme: "THEME_TYPE_DARK",
                },
              },
            },
            id: "restaurantCountWidget",
            gridElements: {
              infoWithStyle: {
                "@type":
                  "type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2",
                text: "177 restaurants to explore",
                headerStyling: {
                  textSize: 15,
                  textColor: "text_color_highest_emphasis",
                  textFontName: "FONT_NAME_HEADER_H5",
                  maxLines: 1,
                },
              },
            },
          },
        },
      },
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            info: {
              id: "34301",
              name: "Sri Udupi Park (100ft Road)",
              cloudinaryImageId: "sjg84ifbojyb9glrtc2l",
              locality: "Defence Colony",
              areaName: "Indiranagar",
              costForTwo: "₹100 for two",
              cuisines: [
                "South Indian",
                "North Indian",
                "Chaat",
                "Beverages",
                "Chinese",
              ],
              avgRating: 4.5,
              veg: true,
              parentId: "194697",
              avgRatingString: "4.5",
              totalRatingsString: "10K+",
              promoted: true,
              adTrackingId:
                "cid=10223872~p=2~eid=0000018c-b925-8916-016e-a05300700206~srvts=1703913294102~80426",
              sla: {
                deliveryTime: 40,
                lastMileTravel: 6.9,
                serviceability: "SERVICEABLE",
                slaString: "40 mins",
                lastMileTravelString: "6.9 km",
                iconType: "ICON_TYPE_EMPTY",
              },
              availability: {
                nextCloseTime: "2023-12-30 22:30:00",
                opened: true,
              },
              badges: {},
              isOpen: true,
              aggregatedDiscountInfoV2: {},
              type: "F",
              badgesV2: {
                entityBadges: {
                  imageBased: {},
                  textExtendedBadges: {},
                  textBased: {},
                },
              },
              orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
              },
              differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                  mediaType: "ADS_MEDIA_ENUM_IMAGE",
                  lottie: {},
                  video: {},
                },
              },
              reviewsSummary: {},
              displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              restaurantOfferPresentationInfo: {},
            },
            analytics: {},
            cta: {
              link: "swiggy://menu?restaurant_id=34301&source=collection&query=Dosa",
              text: "RESTAURANT_MENU",
              type: "DEEPLINK",
            },
            widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
          },
          relevance: {
            type: "RELEVANCE_TYPE_ON_MENU_RETURN",
            sectionId: "MENU_RETURN_FOOD",
          },
        },
      },
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            info: {
              id: "684427",
              name: "Cafe Amudham",
              cloudinaryImageId: "4a752eab41d8483a070eb0b7840c7cc2",
              locality: "Lalbhagh  Siddapura",
              areaName: "Jayanagar",
              costForTwo: "₹400 for two",
              cuisines: ["South Indian", "Snacks"],
              avgRating: 4.6,
              veg: true,
              parentId: "396620",
              avgRatingString: "4.6",
              totalRatingsString: "1K+",
              promoted: true,
              adTrackingId:
                "cid=9903000~p=3~eid=0000018c-b925-8916-016e-a0540070031a~srvts=1703913294102~80426",
              sla: {
                deliveryTime: 27,
                lastMileTravel: 4,
                serviceability: "SERVICEABLE",
                slaString: "27 mins",
                lastMileTravelString: "4.0 km",
                iconType: "ICON_TYPE_EMPTY",
              },
              availability: {
                nextCloseTime: "2023-12-30 23:59:00",
                opened: true,
              },
              badges: {},
              isOpen: true,
              type: "F",
              badgesV2: {
                entityBadges: {
                  textBased: {},
                  imageBased: {},
                  textExtendedBadges: {},
                },
              },
              aggregatedDiscountInfoV3: {
                header: "₹100 OFF",
                subHeader: "ABOVE ₹499",
                discountTag: "FLAT DEAL",
              },
              orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
              },
              differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                  mediaType: "ADS_MEDIA_ENUM_IMAGE",
                  lottie: {},
                  video: {},
                },
              },
              reviewsSummary: {},
              displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              restaurantOfferPresentationInfo: {},
            },
            analytics: {},
            cta: {
              link: "swiggy://menu?restaurant_id=684427&source=collection&query=Dosa",
              text: "RESTAURANT_MENU",
              type: "DEEPLINK",
            },
            widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
          },
          relevance: {
            type: "RELEVANCE_TYPE_ON_MENU_RETURN",
            sectionId: "MENU_RETURN_FOOD",
          },
        },
      },
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            info: {
              id: "176071",
              name: "Brahmins' Thatte Idli",
              cloudinaryImageId: "dodqqt4dlcgqeaqbeugy",
              locality: "Vyalikaval",
              areaName: "Malleshwaram",
              costForTwo: "₹150 for two",
              cuisines: ["South Indian"],
              avgRating: 4.5,
              veg: true,
              parentId: "1312",
              avgRatingString: "4.5",
              totalRatingsString: "5K+",
              promoted: true,
              adTrackingId:
                "cid=10256190~p=6~eid=0000018c-b925-8916-016e-a05700700628~srvts=1703913294102~80426",
              sla: {
                deliveryTime: 28,
                lastMileTravel: 5.7,
                serviceability: "SERVICEABLE",
                slaString: "28 mins",
                lastMileTravelString: "5.7 km",
                iconType: "ICON_TYPE_EMPTY",
              },
              availability: {
                nextCloseTime: "2023-12-30 20:45:00",
                opened: true,
              },
              badges: {},
              isOpen: true,
              type: "F",
              badgesV2: {
                entityBadges: {
                  textExtendedBadges: {},
                  textBased: {},
                  imageBased: {},
                },
              },
              aggregatedDiscountInfoV3: {
                header: "₹100 OFF",
                subHeader: "ABOVE ₹499",
                discountTag: "FLAT DEAL",
              },
              orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
              },
              differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                  mediaType: "ADS_MEDIA_ENUM_IMAGE",
                  lottie: {},
                  video: {},
                },
              },
              reviewsSummary: {},
              displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              restaurantOfferPresentationInfo: {},
            },
            analytics: {},
            cta: {
              link: "swiggy://menu?restaurant_id=176071&source=collection&query=Dosa",
              text: "RESTAURANT_MENU",
              type: "DEEPLINK",
            },
            widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
          },
          relevance: {
            type: "RELEVANCE_TYPE_ON_MENU_RETURN",
            sectionId: "MENU_RETURN_FOOD",
          },
        },
      },
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            info: {
              id: "30903",
              name: "Sannidhi Grand",
              cloudinaryImageId: "1cf553b3f64786dc11d10782f39f38f8",
              locality: "Yadhav layout",
              areaName: "Kammanahalli",
              costForTwo: "₹150 for two",
              cuisines: [
                "South Indian",
                "North Indian",
                "Chinese",
                "Beverages",
              ],
              avgRating: 4.3,
              veg: true,
              parentId: "21007",
              avgRatingString: "4.3",
              totalRatingsString: "10K+",
              promoted: true,
              adTrackingId:
                "cid=10256309~p=7~eid=0000018c-b925-8916-016e-a0580070072c~srvts=1703913294102~80426",
              sla: {
                deliveryTime: 42,
                lastMileTravel: 7.6,
                serviceability: "SERVICEABLE",
                slaString: "42 mins",
                lastMileTravelString: "7.6 km",
                iconType: "ICON_TYPE_EMPTY",
              },
              availability: {
                nextCloseTime: "2023-12-30 22:20:00",
                opened: true,
              },
              badges: {},
              isOpen: true,
              type: "F",
              badgesV2: {
                entityBadges: {
                  textBased: {},
                  imageBased: {},
                  textExtendedBadges: {},
                },
              },
              aggregatedDiscountInfoV3: {
                header: "₹125 OFF",
                subHeader: "ABOVE ₹299",
                discountTag: "FLAT DEAL",
              },
              orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
              },
              differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                  mediaType: "ADS_MEDIA_ENUM_IMAGE",
                  lottie: {},
                  video: {},
                },
              },
              reviewsSummary: {},
              displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              restaurantOfferPresentationInfo: {},
            },
            analytics: {},
            cta: {
              link: "swiggy://menu?restaurant_id=30903&source=collection&query=Dosa",
              text: "RESTAURANT_MENU",
              type: "DEEPLINK",
            },
            widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
          },
          relevance: {
            type: "RELEVANCE_TYPE_ON_MENU_RETURN",
            sectionId: "MENU_RETURN_FOOD",
          },
        },
      },
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            info: {
              id: "58197",
              name: "Shanti Sagar",
              cloudinaryImageId: "xtbucquiocliostvjb9c",
              locality: "Tank Road",
              areaName: "Ulsoor",
              costForTwo: "₹300 for two",
              cuisines: ["South Indian", "North Indian", "Chinese"],
              avgRating: 4.5,
              parentId: "20012",
              avgRatingString: "4.5",
              totalRatingsString: "10K+",
              promoted: true,
              adTrackingId:
                "cid=10221643~p=9~eid=0000018c-b925-8916-016e-a05a00700926~srvts=1703913294102~80426",
              sla: {
                deliveryTime: 30,
                lastMileTravel: 4.3,
                serviceability: "SERVICEABLE",
                slaString: "30 mins",
                lastMileTravelString: "4.3 km",
                iconType: "ICON_TYPE_EMPTY",
              },
              availability: {
                nextCloseTime: "2023-12-30 22:00:00",
                opened: true,
              },
              badges: {
                textExtendedBadges: [
                  {
                    iconId: "guiltfree/GF_Logo_android_3x",
                    shortDescription: "options available",
                    fontColor: "#7E808C",
                  },
                ],
              },
              isOpen: true,
              type: "F",
              badgesV2: {
                entityBadges: {
                  textBased: {},
                  imageBased: {},
                  textExtendedBadges: {
                    badgeObject: [
                      {
                        attributes: {
                          iconId: "guiltfree/GF_Logo_android_3x",
                          description: "",
                          shortDescription: "options available",
                          fontColor: "#7E808C",
                        },
                      },
                    ],
                  },
                },
              },
              aggregatedDiscountInfoV3: {
                header: "10% OFF",
                subHeader: "UPTO ₹40",
              },
              orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
              },
              differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                  mediaType: "ADS_MEDIA_ENUM_IMAGE",
                  lottie: {},
                  video: {},
                },
              },
              reviewsSummary: {},
              displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              restaurantOfferPresentationInfo: {},
            },
            analytics: {},
            cta: {
              link: "swiggy://menu?restaurant_id=58197&source=collection&query=Dosa",
              text: "RESTAURANT_MENU",
              type: "DEEPLINK",
            },
            widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
          },
          relevance: {
            type: "RELEVANCE_TYPE_ON_MENU_RETURN",
            sectionId: "MENU_RETURN_FOOD",
          },
        },
      },
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            info: {
              id: "226779",
              name: "Chikkanna Tiffin Room",
              cloudinaryImageId: "bzc2wmmqdjqcv5efz9er",
              locality: "Nagarathpete",
              areaName: "City Market",
              costForTwo: "₹200 for two",
              cuisines: ["South Indian", "Snacks"],
              avgRating: 4.6,
              veg: true,
              parentId: "20095",
              avgRatingString: "4.6",
              totalRatingsString: "500+",
              sla: {
                deliveryTime: 23,
                lastMileTravel: 1.4,
                serviceability: "SERVICEABLE",
                slaString: "23 mins",
                lastMileTravelString: "1.4 km",
                iconType: "ICON_TYPE_EMPTY",
              },
              availability: {
                nextCloseTime: "2023-12-30 12:00:00",
                opened: true,
              },
              badges: {},
              isOpen: true,
              aggregatedDiscountInfoV2: {},
              type: "F",
              badgesV2: {
                entityBadges: {
                  textExtendedBadges: {},
                  textBased: {},
                  imageBased: {},
                },
              },
              orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
              },
              differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                  mediaType: "ADS_MEDIA_ENUM_IMAGE",
                  lottie: {},
                  video: {},
                },
              },
              reviewsSummary: {},
              displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              restaurantOfferPresentationInfo: {},
            },
            analytics: {},
            cta: {
              link: "swiggy://menu?restaurant_id=226779&source=collection&query=Dosa",
              text: "RESTAURANT_MENU",
              type: "DEEPLINK",
            },
            widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
          },
          relevance: {
            type: "RELEVANCE_TYPE_ON_MENU_RETURN",
            sectionId: "MENU_RETURN_FOOD",
          },
        },
      },
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            info: {
              id: "53490",
              name: "Palmgrove Ballal Residency",
              cloudinaryImageId: "j8q7240v83funqipmsxs",
              locality: "Ashok Nagar",
              areaName: "Ashok Nagar",
              costForTwo: "₹400 for two",
              cuisines: [
                "Chinese",
                "Coastal",
                "Desserts",
                "Jain",
                "North Indian",
                "South Indian",
              ],
              avgRating: 4.6,
              parentId: "154066",
              avgRatingString: "4.6",
              totalRatingsString: "5K+",
              sla: {
                deliveryTime: 21,
                lastMileTravel: 2,
                serviceability: "SERVICEABLE",
                slaString: "21 mins",
                lastMileTravelString: "2.0 km",
                iconType: "ICON_TYPE_EMPTY",
              },
              availability: {
                nextCloseTime: "2023-12-30 21:30:00",
                opened: true,
              },
              badges: {},
              isOpen: true,
              type: "F",
              badgesV2: {
                entityBadges: {
                  textBased: {},
                  imageBased: {},
                  textExtendedBadges: {},
                },
              },
              aggregatedDiscountInfoV3: {
                header: "₹50 OFF",
                subHeader: "ABOVE ₹199",
                discountTag: "FLAT DEAL",
              },
              orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
              },
              differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                  mediaType: "ADS_MEDIA_ENUM_IMAGE",
                  lottie: {},
                  video: {},
                },
              },
              reviewsSummary: {},
              displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              restaurantOfferPresentationInfo: {},
            },
            analytics: {},
            cta: {
              link: "swiggy://menu?restaurant_id=53490&source=collection&query=Dosa",
              text: "RESTAURANT_MENU",
              type: "DEEPLINK",
            },
            widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
          },
          relevance: {
            type: "RELEVANCE_TYPE_ON_MENU_RETURN",
            sectionId: "MENU_RETURN_FOOD",
          },
        },
      },
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            info: {
              id: "335405",
              name: "IDC Kitchen",
              cloudinaryImageId: "5001c950f9d81b32669b994302935443",
              locality: "Sampangirama Nagar",
              areaName: "Sampangirama Nagar",
              costForTwo: "₹150 for two",
              cuisines: ["South Indian", "North Indian", "Indian"],
              avgRating: 4.6,
              veg: true,
              parentId: "105824",
              avgRatingString: "4.6",
              totalRatingsString: "5K+",
              sla: {
                deliveryTime: 18,
                lastMileTravel: 1.6,
                serviceability: "SERVICEABLE",
                slaString: "18 mins",
                lastMileTravelString: "1.6 km",
                iconType: "ICON_TYPE_EMPTY",
              },
              availability: {
                nextCloseTime: "2023-12-30 21:00:00",
                opened: true,
              },
              badges: {},
              isOpen: true,
              aggregatedDiscountInfoV2: {},
              type: "F",
              badgesV2: {
                entityBadges: {
                  textExtendedBadges: {},
                  textBased: {},
                  imageBased: {},
                },
              },
              orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
              },
              differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                  mediaType: "ADS_MEDIA_ENUM_IMAGE",
                  lottie: {},
                  video: {},
                },
              },
              reviewsSummary: {},
              displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              restaurantOfferPresentationInfo: {},
            },
            analytics: {},
            cta: {
              link: "swiggy://menu?restaurant_id=335405&source=collection&query=Dosa",
              text: "RESTAURANT_MENU",
              type: "DEEPLINK",
            },
            widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
          },
          relevance: {
            type: "RELEVANCE_TYPE_ON_MENU_RETURN",
            sectionId: "MENU_RETURN_FOOD",
          },
        },
      },
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            info: {
              id: "719639",
              name: "New Udupi Upahar",
              cloudinaryImageId: "b2ae431f0e0407b16e6af08c3c402e62",
              locality: "Shivashankar Plaza",
              areaName: "Central Bangalore",
              costForTwo: "₹300 for two",
              cuisines: [
                "North Indian",
                "South Indian",
                "Chinese",
                "Tandoor",
                "Chaat",
                "Beverages",
              ],
              avgRating: 4.6,
              veg: true,
              parentId: "14579",
              avgRatingString: "4.6",
              totalRatingsString: "100+",
              sla: {
                deliveryTime: 16,
                lastMileTravel: 1.8,
                serviceability: "SERVICEABLE",
                slaString: "16 mins",
                lastMileTravelString: "1.8 km",
                iconType: "ICON_TYPE_EMPTY",
              },
              availability: {
                nextCloseTime: "2023-12-30 22:00:00",
                opened: true,
              },
              badges: {},
              isOpen: true,
              type: "F",
              badgesV2: {
                entityBadges: {
                  textBased: {},
                  imageBased: {},
                  textExtendedBadges: {},
                },
              },
              aggregatedDiscountInfoV3: {
                header: "10% OFF",
                subHeader: "UPTO ₹40",
              },
              orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
              },
              differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                  mediaType: "ADS_MEDIA_ENUM_IMAGE",
                  lottie: {},
                  video: {},
                },
              },
              reviewsSummary: {},
              displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              restaurantOfferPresentationInfo: {},
            },
            analytics: {},
            cta: {
              link: "swiggy://menu?restaurant_id=719639&source=collection&query=Dosa",
              text: "RESTAURANT_MENU",
              type: "DEEPLINK",
            },
            widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
          },
          relevance: {
            type: "RELEVANCE_TYPE_ON_MENU_RETURN",
            sectionId: "MENU_RETURN_FOOD",
          },
        },
      },
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            info: {
              id: "205813",
              name: "Paakashala",
              cloudinaryImageId: "aqiselzfwc0afcmp9grr",
              locality: "MG Road",
              areaName: "MG Road",
              costForTwo: "₹500 for two",
              cuisines: ["South Indian", "North Indian", "Chinese"],
              avgRating: 4.4,
              veg: true,
              parentId: "6959",
              avgRatingString: "4.4",
              totalRatingsString: "1K+",
              sla: {
                deliveryTime: 18,
                lastMileTravel: 1.8,
                serviceability: "SERVICEABLE",
                slaString: "18 mins",
                lastMileTravelString: "1.8 km",
                iconType: "ICON_TYPE_EMPTY",
              },
              availability: {
                nextCloseTime: "2023-12-30 22:30:00",
                opened: true,
              },
              badges: {
                imageBadges: [
                  {
                    imageId: "v1695133679/badges/Pure_Veg111.png",
                    description: "pureveg",
                  },
                ],
              },
              isOpen: true,
              type: "F",
              badgesV2: {
                entityBadges: {
                  textBased: {},
                  imageBased: {
                    badgeObject: [
                      {
                        attributes: {
                          description: "pureveg",
                          imageId: "v1695133679/badges/Pure_Veg111.png",
                        },
                      },
                    ],
                  },
                  textExtendedBadges: {},
                },
              },
              aggregatedDiscountInfoV3: {
                header: "50% OFF",
                subHeader: "UPTO ₹95",
              },
              orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
              },
              differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                  mediaType: "ADS_MEDIA_ENUM_IMAGE",
                  lottie: {},
                  video: {},
                },
              },
              reviewsSummary: {},
              displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              restaurantOfferPresentationInfo: {},
            },
            analytics: {},
            cta: {
              link: "swiggy://menu?restaurant_id=205813&source=collection&query=Dosa",
              text: "RESTAURANT_MENU",
              type: "DEEPLINK",
            },
            widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
          },
          relevance: {
            type: "RELEVANCE_TYPE_ON_MENU_RETURN",
            sectionId: "MENU_RETURN_FOOD",
          },
        },
      },
    ],
    firstOffsetRequest: true,
    nextFetch: 3,
  },
  tid: "6d034595-c4fa-40f1-a181-07b3c60ada9f",
  sid: "bay1e6ea-d770-43e5-8265-33c8e7c31502",
  deviceId: "81f167a6-383d-7b1c-dbd5-f361595a4882",
  csrfToken: "NYrnQLcx6cZu-hc592LvMsL0veL-BmTsZIrkx2tQ",
};
