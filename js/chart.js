// Apexcharts build helpers
//  area chart 
  window.addEventListener('load', () => {
    (function () {
      buildChart('#hs-multiple-area-charts', (mode) => ({
        chart: {
          height: 300,
          type: 'area',
          toolbar: {
            show: false
          },
          zoom: {
            enabled: false
          }
        },
        series: [
          {
            name: 'Income',
            data: [18000, 51000, 60000, 38000, 88000, 50000, 40000, 52000, 88000, 80000, 60000, 70000]
          },
          {
            name: 'Outcome',
            data: [27000, 38000, 60000, 77000, 40000, 50000, 49000, 29000, 42000, 27000, 42000, 50000]
          }
        ],
        legend: {
          show: false
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight',
          width: 2
        },
        grid: {
          strokeDashArray: 2
        },
        fill: {
          type: 'gradient',
          gradient: {
            type: 'vertical',
            shadeIntensity: 1,
            opacityFrom: 0.1,
            opacityTo: 0.8
          }
        },
        xaxis: {
          type: 'category',
          tickPlacement: 'on',
          categories: [
            'Jan ',
            'Feb ',
            'Mar ',
            'Apr ',
            'May ',
            'Jun ',
            'July ',
            'Aug ',
            'Sep ',
            'Oc ',
            'Nov ',
            'Dec '
          ],
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          crosshairs: {
            stroke: {
              dashArray: 0
            },
            dropShadow: {
              show: false
            }
          },
          tooltip: {
            enabled: false
          },
          labels: {
            style: {
              colors: '#9ca3af',
              fontSize: '13px',
              fontFamily: 'Inter, ui-sans-serif',
              fontWeight: 400
            },
            formatter: (title) => {
              let t = title;

              if (t) {
                const newT = t.split(' ');
                t = `${newT[0]} ${newT[1].slice(0, 3)}`;
              }

              return t;
            }
          }
        },
        yaxis: {
          labels: {
            align: 'left',
            minWidth: 0,
            maxWidth: 140,
            style: {
              colors: '#9ca3af',
              fontSize: '13px',
              fontFamily: 'Inter, ui-sans-serif',
              fontWeight: 400
            },
            formatter: (value) => value >= 1000 ? `${value / 1000}k` : value
          }
        },
        tooltip: {
          x: {
            format: 'MMMM yyyy'
          },
          y: {
            formatter: (value) => `$${value >= 1000 ? `${value / 1000}k` : value}`
          },
          custom: function (props) {
            const { categories } = props.ctx.opts.xaxis;
            const { dataPointIndex } = props;
            const title = categories[dataPointIndex].split(' ');
            const newTitle = `${title[0]} ${title[1]}`;

            return buildTooltip(props, {
              title: newTitle,
              mode,
              hasTextLabel: true,
              wrapperExtClasses: 'min-w-28',
              labelDivider: ':',
              labelExtClasses: 'ms-2'
            });
          }
        },
        responsive: [{
          breakpoint: 568,
          options: {
            chart: {
              height: 300
            },
            labels: {
              style: {
                colors: '#9ca3af',
                fontSize: '11px',
                fontFamily: 'Inter, ui-sans-serif',
                fontWeight: 400
              },
              offsetX: -2,
              formatter: (title) => title.slice(0, 3)
            },
            yaxis: {
              labels: {
                align: 'left',
                minWidth: 0,
                maxWidth: 140,
                style: {
                  colors: '#9ca3af',
                  fontSize: '11px',
                  fontFamily: 'Inter, ui-sans-serif',
                  fontWeight: 400
                },
                formatter: (value) => value >= 1000 ? `${value / 1000}k` : value
              }
            },
          },
        }]
      }), {
        colors: ['#2563eb', '#9333ea'],
        fill: {
          gradient: {
            stops: [0, 90, 100]
          }
        },
        grid: {
          borderColor: '#e5e7eb'
        }
      }, {
        colors: ['#3b82f6', '#a855f7'],
        fill: {
          gradient: {
            stops: [100, 90, 0]
          }
        },
        grid: {
          borderColor: '#374151'
        }
      });
    })();
  });



  // bar chat 

  window.addEventListener('load', () => {
    (function () {
      buildChart('#hs-multiple-bar-charts', (mode) => ({
        chart: {
          type: 'bar',
          height: 300,
          toolbar: {
            show: false
          },
          zoom: {
            enabled: false
          }
        },
        series: [
          {
            name: 'Income',
            data: [23000, 44000, 55000, 57000, 56000, 61000, 58000]
          }, {
            name: 'Outcome',
            data: [17000, 76000, 85000, 101000, 98000, 87000, 105000]
          }
        ],
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '16px',
            borderRadius: 0
          }
        },
        legend: {
          show: false
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 8,
          colors: ['transparent']
        },
        xaxis: {
          categories: [
            'M',
            'T',
            'W',
            'T',
            'F',
            'S',
            'S'
          ],
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          crosshairs: {
            show: false
          },
          labels: {
            style: {
              colors: '#9ca3af',
              fontSize: '13px',
              fontFamily: 'Inter, ui-sans-serif',
              fontWeight: 400
            },
            offsetX: -2,
            formatter: (title) => title.slice(0, 3)
          }
        },
        yaxis: {
          labels: {
            align: 'left',
            minWidth: 0,
            maxWidth: 140,
            style: {
              colors: '#9ca3af',
              fontSize: '13px',
              fontFamily: 'Inter, ui-sans-serif',
              fontWeight: 400
            },
            formatter: (value) => value >= 1000 ? `${value / 1000}k` : value
          }
        },
        states: {
          hover: {
            filter: {
              type: 'darken',
              value: 0.9
            }
          }
        },
        tooltip: {
          y: {
            formatter: (value) => `$${value >= 1000 ? `${value / 1000}k` : value}`
          },
          custom: function (props) {
            const { categories } = props.ctx.opts.xaxis;
            const { dataPointIndex } = props;
            const title = categories[dataPointIndex];
            const newTitle = `${title}`;

            return buildTooltip(props, {
              title: newTitle,
              mode,
              hasTextLabel: true,
              wrapperExtClasses: 'min-w-28',
              labelDivider: ':',
              labelExtClasses: 'ms-2'
            });
          }
        },
        responsive: [{
          breakpoint: 568,
          options: {
            chart: {
              height: 300
            },
            plotOptions: {
              bar: {
                columnWidth: '14px'
              }
            },
            stroke: {
              width: 8
            },
            labels: {
              style: {
                colors: '#9ca3af',
                fontSize: '11px',
                fontFamily: 'Inter, ui-sans-serif',
                fontWeight: 400
              },
              offsetX: -2,
              formatter: (title) => title.slice(0, 3)
            },
            yaxis: {
              labels: {
                align: 'left',
                minWidth: 0,
                maxWidth: 140,
                style: {
                  colors: '#9ca3af',
                  fontSize: '11px',
                  fontFamily: 'Inter, ui-sans-serif',
                  fontWeight: 400
                },
                formatter: (value) => value >= 1000 ? `${value / 1000}k` : value
              }
            },
          },
        }]
      }), {
        colors: ['#2563eb', '#d1d5db'],
        grid: {
          borderColor: '#e5e7eb'
        }
      }, {
        colors: ['#6b7280', '#2563eb'],
        grid: {
          borderColor: '#374151'
        }
      });
    })();
  });


  // doghnut chart 
  window.addEventListener('load', () => {
    (function () {
      buildChart('#hs-doughnut-chart', () => ({
        chart: {
          height: 230,
          width: 230,
          type: 'donut',
          zoom: {
            enabled: false
          }
        },
        plotOptions: {
          pie: {
            donut: {
              size: '65%'
            }
          }
        },
        series: [47, 23, 30,20],
        labels: ['Desktop', 'Tablet', 'Mobile','Unknown'],
        legend: {
          show: false
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 5
        },
        grid: {
          padding: {
            top: -12,
            bottom: -11,
            left: -12,
            right: -12
          }
        },
        states: {
          hover: {
            filter: {
              type: 'none'
            }
          }
        }
      }), {
        colors: ['#3b82f6', '#22d3ee','#87CEFA', '#e5e7eb'],
        stroke: {
          colors: ['rgb(255, 255, 255)']
        }
      }, {
        colors: ['#e5e7eb', '#3b82f6', '#22d3ee'],
        stroke: {
          colors: ['rgb(38, 38, 38)']
        }
      });
    })();
  });


  // Map
  (function () {
    const dataSet = {
      BRA: {
        active: {
          value: '5,101',
          percent: '42.2',
          isGrown: false
        },
        new: {
          value: '444',
          percent: '41.2',
          isGrown: false
        },
        fillKey: 'MAJOR',
        short: 'br'
      },
      CHN: {
        active: {
          value: '10,101',
          percent: '13.7',
          isGrown: true
        },
        new: {
          value: '509',
          percent: '0.1',
          isGrown: false
        },
        fillKey: 'MAJOR',
        short: 'cn'
      },
      DEU: {
        active: {
          value: '8,408',
          percent: '5.4',
          isGrown: false
        },
        new: {
          value: '1001',
          percent: '5.1',
          isGrown: true
        },
        fillKey: 'MAJOR',
        short: 'de'
      },
      GBR: {
        active: {
          value: '4,889',
          percent: '9.1',
          isGrown: false
        },
        new: {
          value: '2,001',
          percent: '3.2',
          isGrown: true
        },
        fillKey: 'MAJOR',
        short: 'gb'
      },
      IND: {
        active: {
          value: '1,408',
          percent: '19.2',
          isGrown: true
        },
        new: {
          value: '392',
          percent: '11.1',
          isGrown: true
        },
        fillKey: 'MAJOR',
        short: 'in'
      },
      USA: {
        active: {
          value: '392',
          percent: '0.9',
          isGrown: true
        },
        new: {
          value: '1,408',
          percent: '2.2',
          isGrown: true
        },
        fillKey: 'MAJOR',
        short: 'us',
        customName: 'United States'
      }
    };
    const dataMap = new Datamap({
      element: document.querySelector('#hs-users-datamap'),
      projection: 'mercator',
      responsive: true,
      fills: {
        defaultFill: '#d1d5db',
        MAJOR: '#9ca3af'
      },
      data: dataSet,
      geographyConfig: {
        borderColor: 'rgba(0, 0, 0, .09)',
        highlightFillColor: '#3b82f6',
        highlightBorderColor: '#3b82f6',
        popupTemplate: function (geo, data) {
          const growUp = `<svg class="size-4 text-teal-500 dark:text-teal-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
          </svg>`;
          const growDown = `<svg class="size-4 text-red-500 dark:text-red-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"/><polyline points="16 17 22 17 22 11"/></svg>
          </svg>`;

          return `<div class="bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] w-[150px] p-3">
            <div class="flex mb-1">
              <div class="me-2">
                <div class="size-4 rounded-full bg-no-repeat bg-center bg-cover" style="background-image: url('../node_modules/svg-country-flags/svg/${data.short}.svg')"></div>
              </div>
              <span class="text-sm font-medium">${data.customName || geo.properties.name}</span>
            </div>
            <div class="flex items-center">
              <span class="text-sm text-gray-500 dark:text-neutral-500">Active:</span>
               <span class="text-sm font-medium ${data.active.value}</span>
               <span class="text-sm ${data.active.isGrown ? 'text-teal-500 dark:text-teal-400' : 'text-red-500 dark:text-red-400'}">${data.active.percent}</span>
               ${data.active.isGrown ? growUp : growDown}
            </div>
            <div class="flex items-center">
              <span class="text-sm text-gray-500 dark:text-neutral-500">New:</span>
               <span class="text-sm font-medium ${data.new.value}</span>
               <span class="text-sm ${data.active.isGrown ? 'text-teal-500 dark:text-teal-400' : 'text-red-500 dark:text-red-400'}">${data.new.percent}</span>
               ${data.new.isGrown ? growUp : growDown}
            </div>
          </div>`;
        }
      }
    });
    dataMap.addPlugin('update', function (_, mode) {
      this.options.fills = (mode === 'dark') ? {
        defaultFill: '#374151',
        MAJOR: '#6b7280'
      } : {
        defaultFill: '#d1d5db',
        MAJOR: '#9ca3af'
      };

      this.updateChoropleth(dataSet, {reset: true});
    });

    dataMap.update(localStorage.getItem('hs_theme'));

    window.addEventListener('on-hs-appearance-change', (evt) => {
      dataMap.update(evt.detail);
    });

    window.addEventListener('resize', function () {
      dataMap.resize();
    });
  })();
