import qs from 'qs';
import { getStrapiURL } from '@/lib/utils';

const baseUrl = getStrapiURL();

async function fetchData(url: string) {
  const authToken = null;
  const headers = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`,
    },
  };

  try {
    const response = await fetch(url, authToken ? headers : {});
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

export async function getGlobalData() {
  const url = new URL('/api/global', baseUrl);
  url.search = qs.stringify({
    populate: [
      'footer.footerLinks.links.icon',
      'header.logo.icon',
      'header.navLink',
      'header.orderBtn.icon',
    ],
  });

  return await fetchData(url.href);
}

export async function getHomePageData() {
  const url = new URL('/api/home', baseUrl);

  url.search = qs.stringify({
    populate: {
      blocks: {
        on: {
          'layout.slider': {
            populate: {
              slide: {
                populate: {
                  image: {
                    fields: ['url', 'alternativeText'],
                  },
                  imageSmall: {
                    fields: ['url', 'alternativeText'],
                  },
                },
              },
            },
          },
          // 'layout.footer-links': {
          //   populate: {
          //     links: {
          //       populate: {
          //         icon: {
          //           fields: ['url', 'alternativeText'],
          //         },
          //       },
          //     },
          //   },
          // },
        },
      },
    },
  });

  return await fetchData(url.href);
}

export async function getAboutPageData() {
  const url = new URL('/api/about', baseUrl);

  url.search = qs.stringify({
    populate: {
      blocks: {
        on: {
          'layout.hero-section': {
            populate: {
              image: {
                fields: ['url', 'alternativeText'],
              },
              link: {
                populate: true,
              },
            },
          },
        },
      },
    },
  });

  return await fetchData(url.href);
}
export async function getDevicesPageData() {
  const url = new URL('/api/device', baseUrl);

  url.search = qs.stringify({
    populate: {
      blocks: {
        on: {
          'layout.hero-section': {
            populate: {
              image: {
                fields: ['url', 'alternativeText'],
              },
              link: {
                populate: true,
              },
            },
          },
          'layout.devices-block': {
            populate: {
              devices: {
                populate: {
                  image: {
                    fields: ['url', 'alternativeText'],
                  },
                  features: {
                    populate: {
                      icon: {
                        fields: ['url', 'alternativeText'],
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  });

  return await fetchData(url.href);
}

export async function getContactsPageData() {
  const url = new URL('/api/contacts', baseUrl);
  url.search = qs.stringify({
    populate: {
      blocks: {
        on: {
          'layout.hero-section': {
            populate: {
              image: {
                fields: ['url', 'alternativeText'],
              },
              link: {
                populate: true,
              },
            },
          },
          'layout.contacts-info': {
            populate: {
              tel: {
                populate: true,
              },
            },
          },
        },
      },
    },
  });

  return await fetchData(url.href);
}

//общая функция получения данных с сервера
export async function getStrapiData(path: string, pageQuery: any) {
  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL ?? 'http://localhost:1337';
  const url = new URL(path, baseUrl);
  url.search = pageQuery;

  try {
    const response = await fetch(url.href, { cache: 'no-store' });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
