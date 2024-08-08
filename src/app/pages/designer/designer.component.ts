import { Component,  } from '@angular/core';

import { Inject, NgZone, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import * as am5percent from '@amcharts/amcharts5/percent';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-designer',
  templateUrl: './designer.component.html',
  styleUrls: ['./designer.component.css'],
})
export class DesignerComponent {


  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private zone: NgZone,
    private service: ServiceService
  ) {
    this.service.headerNav({ module: '', links: 'Designer' });
  }

  browserOnly(f: () => void) {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        f();
      });
    }
  }

  ngAfterViewInit() {
    // Chart code goes in here
    this.browserOnly(() => {
      this.Certanity();
      this.pieChartvariant();
      this.funnelChart();
      this.barChart();
      this.pieChart();
    });
  }


  barChart() {
    let root = am5.Root.new('chartdiv');

    let chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panY: false,
        panX: true,
        layout: root.horizontalLayout,
      })
    );
    root._logo!.dispose();
    // Define data

    let data = [
      {
        user_name: 'Vishal Mishra',
        total_ticket: 3,
      },
      {
        user_name: 'Pawna Kumare',
        total_ticket: 19,
      },
      {
        user_name: 'Shivank Tyagi',
        total_ticket: 36,
      },

      {
        user_name: 'Vikash Tiwari',
        total_ticket: 5,
      },
      {
        user_name: 'Ankit Tyagi',
        total_ticket: 90,
      },
      {
        user_name: 'vivek',
        total_ticket: 90,
      },
      {
        user_name: 'Vikash Tiwari123',
        total_ticket: 90,
      },
      {
        user_name: 'geeta',
        total_ticket: 5,
      },
      {
        user_name: 'Vih Tiwari123',
        total_ticket: 90,
      },
      {
        user_name: 'kdndsi',
        total_ticket: 5,
      },
      {
        user_name: 'Vik',
        total_ticket: 6,
      },
      {
        user_name: 'geet',
        total_ticket: 5,
      },
      {
        user_name: 'Vih Ti3',
        total_ticket: 6,
      },
      {
        user_name: 'kdi',
        total_ticket: 7,
      },
    ];
    let sales_ticket_per_owner = data.slice(0, 4);

    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        min: 0,
        max: 100,
        renderer: am5xy.AxisRendererY.new(root, {}),
        visible: false,
      })
    );
    yAxis.get('renderer').grid.template.setAll({ visible: false });

    let xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        renderer: am5xy.AxisRendererX.new(root, {}),
        categoryField: 'user_name',
        startLocation: 0.7,
      })
    );
    xAxis.get('renderer').grid.template.setAll({ visible: false });
    xAxis.data.setAll(sales_ticket_per_owner);

 
    let total_ticket = 'total_ticket';
    let user_name = 'user_name';
    let series1 = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: 'Sale per ticket',
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: total_ticket,
        categoryXField: user_name,
        fill: am5.color(0x095256),
        stroke: am5.color(0x095256),
      })
    );
    series1.columns.template.setAll({
      width: am5.percent(20),
    });
    series1.data.setAll(sales_ticket_per_owner);
    series1.appear(1000, 100);

   
    var button = chart.plotContainer.children.push(
      am5.Button.new(root, {
        dx: 1600,
        dy: 250,
        label: am5.Label.new(root, {
          text: 'Add data',
        }),
      })
    );

    let index = 0;
    let add = 0;
    let remove = 0;
    let gap = data.length - sales_ticket_per_owner.length;
    button.events.on('click', function () {
      remove = remove + 1;
      console.log('remove', remove);
      if (add < gap && add >= 0) {
        let myObject = {
          user_name: data[add + sales_ticket_per_owner.length].user_name,
          total_ticket: data[add + sales_ticket_per_owner.length].total_ticket,
        };
        sales_ticket_per_owner.push(myObject);
        sales_ticket_per_owner.shift();
        xAxis.data.setAll(sales_ticket_per_owner);
        series1.data.setAll(sales_ticket_per_owner);
        add = add + 1;
      } else {
        console.log('nodata');
      }
    });

    var button = chart.plotContainer.children.push(
      am5.Button.new(root, {
        dx: 20,
        dy: 250,

        label: am5.Label.new(root, {
          text: 'back',
        }),
      })
    );

    button.events.on('click', function () {
      if (remove > 0) {
        console.log(sales_ticket_per_owner.length);

        let valueAtIndex5 =
          sales_ticket_per_owner[sales_ticket_per_owner.length - 1];

        for (let i = 0; i < data.length; i++) {
          if (
            data[i].user_name == valueAtIndex5.user_name &&
            data[i].total_ticket == valueAtIndex5.total_ticket
          ) {
            index = i - 1;
            break;
          }
        }
        console.log(index);
        console.log(remove);
        console.log(index - sales_ticket_per_owner.length);
        let myObject = {
          user_name: data[index - sales_ticket_per_owner.length + 1].user_name,
          total_ticket:
            data[index - sales_ticket_per_owner.length + 1].total_ticket,
        };
        sales_ticket_per_owner.pop();
        sales_ticket_per_owner.unshift(myObject);
        xAxis.data.setAll(sales_ticket_per_owner);
        series1.data.setAll(sales_ticket_per_owner);
        index = index - 1;
        remove = remove - 1;
        add = add - 1;
      }
    });
  }

  Certanity() {
    let ygraph = am5.Root.new('yChart');
    ygraph.setThemes([am5themes_Animated.new(ygraph)]);
    var ychart = ygraph.container.children.push(
      am5xy.XYChart.new(ygraph, {
        panX: false,
        panY: false,
        x: 40,
        y: 10,
        height: 400,
        paddingLeft: 0,
        layout: ygraph.verticalLayout,
      })
    );
    ygraph._logo!.dispose();

    let certainity = [
      {
        name: 'High',
        value: 32,
      },
      {
        name: 'Moderate',
        value: 47,
      },
      {
        name: 'Low',
        value: 28,
      },
      {
        name: 'Extremly High',
        value: 10,
      },
      {
        name: 'Almost Lost',
        value: 2,
      },
    ];

    var yRenderer = am5xy.AxisRendererY.new(ygraph, {
      cellStartLocation: 0.1,
      cellEndLocation: 0.9,
      minorGridEnabled: true,
    });

    yRenderer.grid.template.set('location', 1);

    var yAxis = ychart.yAxes.push(
      am5xy.CategoryAxis.new(ygraph, {
        categoryField: 'name',
        renderer: yRenderer,
        visible: false,
      })
    );
    yAxis.get('renderer').grid.template.setAll({ visible: false });

    yAxis.data.setAll(certainity);

    var xAxis = ychart.xAxes.push(
      am5xy.ValueAxis.new(ygraph, {
        min: 0,
        renderer: am5xy.AxisRendererX.new(ygraph, {
          strokeOpacity: 0.1,
          visible: false,
        }),
        visible: false,
      })
    );
    xAxis.get('renderer').grid.template.setAll({ visible: false });
    yAxis.setAll({
      background: am5.Rectangle.new(ygraph, {
        fill: ygraph.interfaceColors.get('alternativeBackground'),
      }),
    });

    var yseries = ychart.series.push(
      am5xy.ColumnSeries.new(ygraph, {
        name: 'Certainity',
        xAxis: xAxis,
        yAxis: yAxis,
        y: 50,
        valueXField: 'value',
        categoryYField: 'name',
      })
    );



    yseries.columns.template.setAll({
      height: 20,
    });
    yseries.data.setAll(certainity);

    yseries.bullets.push(function () {
      return am5.Bullet.new(ygraph, {
        locationX: 1,
        locationY: 0.5,
        sprite: am5.Label.new(ygraph, {
          centerY: am5.p50,
          text: '{value}',
          populateText: true,
        }),
      });
    });

    let ylegend = ychart.children.push(
      am5.Legend.new(ygraph, {
        x: 10,
        y: 350,
        width: 400,
        marginTop: 15,
        marginBottom: 15,
        nameField: 'categoryY',
      })
    );

    ylegend.data.setAll(yseries.dataItems);
  }

  pieChart() {
    let source_graph = [
      {
        sourceName: 'Direct',
        value: 309,
      },
      {
        sourceName: 'Cross Sales',
        value: 97,
      },
      {
        sourceName: 'Portal Enquiry',
        value: 7,
      },
    ];
    let pie = am5.Root.new('pieChart');
    pie.setThemes([am5themes_Animated.new(pie)]);

    let piechart = pie.container.children.push(
      am5percent.PieChart.new(pie, {
        layout: pie.verticalLayout,

        innerRadius: am5.percent(50),
      })
    );
    let pieseries = piechart.series.push(
      am5percent.PieSeries.new(pie, {
        valueField: 'value',
        categoryField: 'sourceName',
        alignLabels: false,
        y: 50,
        legendLabelText: '[{}]{category}[/]',
        legendValueText: '[ {}][/]',
      })
    );
    pie._logo!.dispose();
    pieseries.labels.template.setAll({
      textType: 'circular',
      centerX: 0,
      centerY: 0,
    });

    pieseries.data.setAll(source_graph);
    pieseries.labels.template.set('visible', false);
    pieseries.ticks.template.set('visible', false);
    pieseries.slices.template.set('toggleKey', 'none');

    let pielegend = piechart.children.push(
      am5.Legend.new(pie, {
        x: 10,
        y: 10,
        width: 1500,
        marginTop: 15,
        marginBottom: 15,
      })
    );

    pielegend.data.setAll(pieseries.dataItems);
  }
  pieChartvariant() {
    let Sales_request_per_variant = [
      {
        name: 'Bronze',
        count: 18,
      },
      {
        name: 'Gold',
        count: 48,
      },
      {
        name: 'Silver',
        count: 94,
      },
      {
        name: 'Best Effort',
        count: 27,
      },
      {
        name: 'Platinum',
        count: 4,
      },
    ];
    let dobnut = am5.Root.new('dobnutchart');
    dobnut.setThemes([am5themes_Animated.new(dobnut)]);
    dobnut._logo!.dispose();
    let dobnutchart = dobnut.container.children.push(
      am5percent.PieChart.new(dobnut, {
        layout: dobnut.verticalLayout,
        width: 200,
        x: 90,
        innerRadius: am5.percent(50),
      })
    );
    let dobnutseries = dobnutchart.series.push(
      am5percent.PieSeries.new(dobnut, {
        valueField: 'count',
        categoryField: 'name',
        legendLabelText: '[{}]{category}[/]',
        legendValueText: '[ {}][/]',
      })
    );
    dobnutseries.labels.template.setAll({
      textType: 'circular',
      centerX: 0,
      centerY: 0,
    });
    dobnutseries.data.setAll(Sales_request_per_variant);
    dobnutseries.labels.template.set('visible', false);
    dobnutseries.ticks.template.set('visible', false);
    dobnutseries.slices.template.set('toggleKey', 'none');

    let dobnutlegend = dobnutchart.children.push(
      am5.Legend.new(dobnut, {
        y: 90,
        x: 190,
        marginTop: 15,
        marginBottom: 15,
      })
    );
    dobnutlegend.data.setAll(dobnutseries.dataItems);
  }
  funnelChart() {
    let sales_funnel = [
      {
        name: 'Lead',
        count: 413,
        percentage: '27%',
      },
      {
        name: 'Opportunity',
        count: 113,
        percentage: '76%',
      },
      {
        name: 'Quotation',
        count: 86,
        percentage: '58%',
      },
      {
        name: 'Order',
        count: 50,
        percentage: '0%',
      },
      {
        name: 'Ordr',
        count: 20,
        percentage: '98%',
      },
    ];
  
    let funnel = am5.Root.new('funnelChart');

   
    funnel.setThemes([am5themes_Animated.new(funnel)]);

  
    let chart = funnel.container.children.push(
      am5percent.SlicedChart.new(funnel, {
        layout: funnel.verticalLayout,
      })
    );

    let series = chart.series.push(
      am5percent.FunnelSeries.new(funnel, {
        alignLabels: false,
        orientation: 'vertical',
        valueField: 'count',
        categoryField: 'name',
        width: 200,
        x: 150,
        legendLabelText: '[]{percentage}[/]',
        legendValueText: '[ {}][/]',
      })
    );
    series.labels.template.set('text', ' [bold]{count}');



    series.data.setAll(sales_funnel);


  
    let legend2 = chart.children.push(
      am5.Legend.new(funnel, {
        centerX: am5.p50,
        width: 100,
        height: 100,
        x: 50,
        y: 20,
        marginTop: 15,
        marginBottom: 15,
        nameField: 'category',
      })
    );
    legend2.markers.template.setAll({
      width: 0,
      height: 0,
    });
    let legend = chart.children.push(
      am5.Legend.new(funnel, {
        centerX: am5.p50,
        width: 100,
        height: 100,
        x: 450,
        y: 20,
        marginTop: 15,
        marginBottom: 15,
      })
    );
    funnel._logo!.dispose();
    legend.markers.template.setAll({
      width: 0,
      height: 0,
    });
    legend.labels.template.set('paddingBottom', 18);
    legend2.data.setAll(series.dataItems);
    legend2.labels.template.set('paddingBottom', 18);
    legend.data.setAll(series.dataItems);

  
  }
  data1 = [
    {
      checkbox: true,
      ID: 1,
      Stage: 'Stage 1',
      Status: 'Active',
      ACC: 'ACC 1',
      Source: 'Source 1',
      pro: 'pro 1',
      rec: 'rec 1',
      acess: 'acess 1',
      exis: 'exis 1',
    },
    {
      checkbox: false,
      ID: 2,
      Stage: 'Stage 2',
      Status: 'Inactive',
      ACC: 'ACC 2',
      Source: 'Source 2',
      pro: 'pro 2',
      rec: 'rec 2',
      acess: 'acess 2',
      exis: 'exis 2',
    },
    {
      checkbox: true,
      ID: 3,
      Stage: 'Stage 3',
      Status: 'Active',
      ACC: 'ACC 3',
      Source: 'Source 3',
      pro: 'pro 3',
      rec: 'rec 3',
      acess: 'acess 3',
      exis: 'exis 3',
    },
    {
      checkbox: false,
      ID: 4,
      Stage: 'Stage 4',
      Status: 'Inactive',
      ACC: 'ACC 4',
      Source: 'Source 4',
      pro: 'pro 4',
      rec: 'rec 4',
      acess: 'acess 4',
      exis: 'exis 4',
    },
    {
      checkbox: true,
      ID: 5,
      Stage: 'Stage 5',
      Status: 'Active',
      ACC: 'ACC 5',
      Source: 'Source 5',
      pro: 'pro 5',
      rec: 'rec 5',
      acess: 'acess 5',
      exi: 'exis 5',
    },
    {
      checkbox: false,
      ID: 6,
      Stage: 'Stage 6',
      Status: 'Inactive',
      ACC: 'ACC 6',
      Source: 'Source 6',
      pro: 'pro 6',
      rec: 'rec 6',
      'acess..': 'acess 6',
      'exis..': 'exis 6',
    },
    {
      checkbox: true,
      ID: 7,
      Stage: 'Stage 7',
      Status: 'Active',
      'ACC..': 'ACC 7',
      'Source..': 'Source 7',
      'pro...': 'pro 7',
      'rec..': 'rec 7',
      'acess..': 'acess 7',
      'exis..': 'exis 7',
    },
    {
      checkbox: false,
      ID: 8,
      Stage: 'Stage 8',
      Status: 'Inactive',
      ACC: 'ACC 8',
      Source: 'Source 8',
      pro: 'pro 8',
      rec: 'rec 8',
      acess: 'acess 8',
      exis: 'exis 8',
    },
    {
      checkbox: true,
      ID: 9,
      Stage: 'Stage 9',
      Status: 'Active',
      ACC: 'ACC 9',
      Source: 'Source 9',
      pro: 'pro 9',
      rec: 'rec 9',
      acess: 'acess 9',
      exis: 'exis 9',
    },
    {
      checkbox: false,
      ID: 10,
      Stage: 'Stage 10',
      Status: 'Inactive',
      ACC: 'ACC 10',
      Source: 'Source 10',
      pro: 'pro 10',
      rec: 'rec 10',
      acess: 'acess 10',
      exis: 'exis 10',
    },
  ];
}
