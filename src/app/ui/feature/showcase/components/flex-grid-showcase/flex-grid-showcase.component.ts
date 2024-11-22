import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'FlexGridShowcase',
  templateUrl: './flex-grid-showcase.component.html',
  styleUrls: ['./flex-grid-showcase.component.scss'],
  standalone: true,
  imports:[
    CommonModule
  ]
})
export class FlexGridShowcaseComponent implements OnInit {
  code1 = `
    <div class="grid">
      <div class="col-12 md:col-6 lg:col-3 py-3 p-0 md:p-1 lg:p-1">
          <div class="box border-noround text-center m-0 md:m-1 lg:m-1">1</div>
      </div>
      <div class="col-12 md:col-6 lg:col-3 py-3 p-0 md:p-1 lg:p-1">
          <div class="box border-noround text-center m-0 md:m-1 lg:m-1">2</div>
      </div>
      <div class="col-12 md:col-6 lg:col-3 py-3 p-0 md:p-1 lg:p-1">
          <div class="box border-noround text-center m-0 md:m-1 lg:m-1">3</div>
      </div>
      <div class="col-12 md:col-6 lg:col-3 py-3 p-0 md:p-1 lg:p-1">
          <div class="box border-noround text-center m-0 md:m-1 lg:m-1">4</div>
      </div>
    </div> 
    `;
  code2 = `
    <div class="card">
      <div class="flex flex-wrap gap-3 align-items-center justify-content-center">
          <div class="relative box-200 w-9rem h-9rem mx-3 my-3 md:my-0 border-round">
              <div
                  class="absolute box-300 top-0 left-0 font-bold flex align-items-center justify-content-center w-4rem h-4rem border-round">
                  1</div>
          </div>
          <div class="relative box-200 w-9rem h-9rem mx-3 my-3 md:my-0 border-round">
              <div
                  class="absolute box-300 top-0 right-0 font-bold flex align-items-center justify-content-center w-4rem h-4rem border-round">
                  2</div>
          </div>
          <div class="relative box-200 w-9rem h-9rem mx-3 my-3 md:my-0 border-round">
              <div
                  class="absolute box-300 bottom-0 right-0 font-bold flex align-items-center justify-content-center w-4rem h-4rem border-round">
                  3</div>
          </div>
          <div class="relative box-200 w-9rem h-9rem mx-3 my-3 md:my-0 border-round">
              <div
                  class="absolute box-300 bottom-0 left-0 font-bold flex align-items-center justify-content-center w-4rem h-4rem border-round">
                  4</div>
          </div>
      </div>
    </div>
  `;
  code3 = `
      <div class="card">
        <div class="grid">
            <div class="col-4">
                <div class="text-center p-3 border-round-sm font-bold box">4</div>
            </div>
            <div class="col">
                <div class="text-center p-3 border-round-sm font-bold box">1</div>
            </div>
            <div class="col">
                <div class="text-center p-3 border-round-sm font-bold box">1</div>
            </div>
            <div class="col">
                <div class="text-center p-3 border-round-sm font-bold box">1</div>
            </div>
            <div class="col">
                <div class="text-center p-3 border-round-sm font-bold box">1</div>
            </div>
            <div class="col">
                <div class="text-center p-3 border-round-sm font-bold box">1</div>
            </div>
            <div class="col">
                <div class="text-center p-3 border-round-sm font-bold box">1</div>
            </div>
            <div class="col">
                <div class="text-center p-3 border-round-sm font-bold box">1</div>
            </div>
            <div class="col">
                <div class="text-center p-3 border-round-sm font-bold box">1</div>
            </div>
        </div>
        <div class="grid">
            <div class="col-2">
                <div class="text-center p-3 border-round-sm font-bold box">2</div>
            </div>
            <div class="col-6">
                <div class="text-center p-3 border-round-sm font-bold box">6</div>
            </div>
            <div class="col-4">
                <div class="text-center p-3 border-round-sm font-bold box">4</div>
            </div>
        </div>
    </div>
  `;
  code4 = `
      <h1>Flex Grid</h1>
      <div class="card">
          <h5>Reverse Direction</h5>
          <div class="grid flex-row-reverse">
              <div class="col">
                  <div class="box text-center">1</div>
              </div>
              <div class="col">
                  <div class="box text-center">2</div>
              </div>
              <div class="col">
                  <div class="box text-center">3</div>
              </div>
          </div>
      </div>
  `;
  code5 = `
      <div class="card">
        <h5>Column Direction</h5>
        <div class="grid flex-column">
            <div class="col">
                <div class="box text-center">1</div>
            </div>
            <div class="col">
                <div class="box text-center">2</div>
            </div>
            <div class="col">
                <div class="box text-center">3</div>
            </div>
        </div>
      </div>
  `;
  code6 = `
      <div class="card">
        <h5>Reverse Column Direction</h5>
        <div class="grid flex-column-rev">
            <div class="col">
                <div class="box text-center">1</div>
            </div>
            <div class="col">
                <div class="box text-center">2</div>
            </div>
            <div class="col">
                <div class="box text-center">3</div>
            </div>
        </div>
      </div>
  `;
  code7 = `
      <div class="card">
        <h5>12 Column Grid</h5>
        <div class="grid">
            <div class="col-4">
                <div class="box text-center">4</div>
            </div>
            <div class="col">
                <div class="box text-center">1</div>
            </div>
            <div class="col">
                <div class="box text-center">1</div>
            </div>
            <div class="col">
                <div class="box text-center">1</div>
            </div>
            <div class="col">
                <div class="box text-center">1</div>
            </div>
            <div class="col">
                <div class="box text-center">1</div>
            </div>
            <div class="col">
                <div class="box text-center">1</div>
            </div>
            <div class="col">
                <div class="box text-center">1</div>
            </div>
            <div class="col">
                <div class="box text-center">1</div>
            </div>
        </div>
    </div>
  `;
  code8 = `
      <div class="card">
        <div class="grid">
            <div class="col-2">
                <div class="box text-center">2</div>
            </div>
            <div class="col-6">
                <div class="box text-center">6</div>
            </div>
            <div class="col-4">
                <div class="box text-center">4</div>
            </div>
        </div>
    </div>
  `;
  code9 = `
      <div class="card">
        <div class="grid">
            <div class="col-8">
                <div class="box text-center">8</div>
            </div>
            <div class="col-2">
                <div class="box text-center">2</div>
            </div>
            <div class="col-2">
                <div class="box text-center">2</div>
            </div>
        </div>
    </div>
  `;
  code10 = `
      <div class="card">
        <h5>MultiLine</h5>
        <div class="grid">
            <div class="col-6">
                <div class="box text-center">6</div>
            </div>
            <div class="col-6">
                <div class="box text-center">6</div>
            </div>
            <div class="col-6">
                <div class="box text-center">6</div>
            </div>
            <div class="col-6">
                <div class="box text-center">6</div>
            </div>
        </div>
    </div>
  `;
  code11 = `
      <div class="card">
        <h5>Fixed Width Column</h5>
        <div class="grid">
            <div class="col-fixed" style="width:100px">
                <div class="box text-center">100px</div>
            </div>
            <div class="col">
                <div class="box text-center">auto</div>
            </div>
        </div>
    </div>
  `;
  code12 = `
      <div class="card">
        <h5>Responsive</h5>
        <div class="grid">
            <div class="col-12 md:col-6 lg:col-3">
                <div class="box text-center">col-12 md:col-6 lg:col-3</div>
            </div>
            <div class="col-12 md:col-6 lg:col-3">
                <div class="box text-center">col-12 md:col-6 lg:col-3</div>
            </div>
            <div class="col-12 md:col-6 lg:col-3">
                <div class="box text-center">col-12 md:col-6 lg:col-3</div>
            </div>
            <div class="col-12 md:col-6 lg:col-3">
                <div class="box text-center">col-12 md:col-6 lg:col-3</div>
            </div>
        </div>
    </div>
  `;
  code13 = `
      <div class="card">
        <h5>Horizontal Alignment - Start</h5>
        <div class="grid justify-content-start">
            <div class="col-2">
                <div class="box text-center">2</div>
            </div>
            <div class="col-1">
                <div class="box text-center">1</div>
            </div>
            <div class="col-4">
                <div class="box text-center">4</div>
            </div>
        </div>
    </div>
  `;
  code14 = `
      <div class="card">
        <h5>Horizontal Alignment - End</h5>
        <div class="grid justify-content-end">
            <div class="col-2">
                <div class="box text-center">2</div>
            </div>
            <div class="col-1">
                <div class="box text-center">1</div>
            </div>
            <div class="col-4">
                <div class="box text-center">4</div>
            </div>
        </div>
    </div>
  `;
  code15 = `
      <div class="card">
        <h5>Horizontal Alignment - Center</h5>
        <div class="grid justify-content-center">
            <div class="col-2">
                <div class="box text-center">2</div>
            </div>
            <div class="col-1">
                <div class="box text-center">1</div>
            </div>
            <div class="col-4">
                <div class="box text-center">4</div>
            </div>
        </div>
    </div>
  `;
  code16 = `
      <div class="card">
        <h5>Horizontal Alignment - Between</h5>
        <div class="grid justify-content-between">
            <div class="col-2">
                <div class="box text-center">2</div>
            </div>
            <div class="col-1">
                <div class="box text-center">1</div>
            </div>
            <div class="col-4">
                <div class="box text-center">4</div>
            </div>
        </div>
    </div>
  `;
  code17 = `
      <div class="card">
        <h5>Horizontal Alignment - Around</h5>
        <div class="grid justify-content-around">
            <div class="col-2">
                <div class="box text-center">2</div>
            </div>
            <div class="col-1">
                <div class="box text-center">1</div>
            </div>
            <div class="col-4">
                <div class="box text-center">4</div>
            </div>
        </div>
    </div>
  `;
  code18 = `
      <div class="card">
        <h5>Horizontal Alignment - Even</h5>
        <div class="grid justify-content-evenly">
            <div class="col-2">
                <div class="box text-center">2</div>
            </div>
            <div class="col-1">
                <div class="box text-center">1</div>
            </div>
            <div class="col-4">
                <div class="box text-center">4</div>
            </div>
        </div>
    </div>
  `;
  code19 = `
      <div class="card">
        <h5>Vertical Alignment - Start</h5>
        <div class="grid align-items-start vertical-container">
            <div class="col">
                <div class="box text-center">4</div>
            </div>
            <div class="col">
                <div class="box text-center">4</div>
            </div>
            <div class="col">
                <div class="box text-center">4</div>
            </div>
        </div>
    </div>
  `;
  code20 = `
      <div class="card">
        <h5>Vertical Alignment - End</h5>
        <div class="grid align-items-end vertical-container">
            <div class="col">
                <div class="box text-center">4</div>
            </div>
            <div class="col">
                <div class="box text-center">4</div>
            </div>
            <div class="col">
                <div class="box text-center">4</div>
            </div>
        </div>
    </div>
  `;
  code21 = `
      <div class="card">
        <h5>Vertical Alignment - Center</h5>
        <div class="grid align-items-center vertical-container">
            <div class="col">
                <div class="box text-center">4</div>
            </div>
            <div class="col">
                <div class="box text-center">4</div>
            </div>
            <div class="col">
                <div class="box text-center">4</div>
            </div>
        </div>
    </div>
  `;
  code22 = `
      <div class="card">
        <h5>Vertical Alignment - Stretch</h5>
        <div class="grid align-items-stretch vertical-container">
            <div class="col">
                <div class="box box-stretched">4</div>
            </div>
            <div class="col">
                <div class="box box-stretched">4</div>
            </div>
            <div class="col">
                <div class="box box-stretched">4</div>
            </div>
        </div>
    </div>
  `;
  code23 = `
      <div class="card">
        <h5>Vertical Alignment - Per Column</h5>
        <div class="grid vertical-container">
            <div class="col col-align-start">
                <div class="box text-center">4</div>
            </div>
            <div class="col col-align-center">
                <div class="box text-center">4</div>
            </div>
            <div class="col col-align-end">
                <div class="box text-center">4</div>
            </div>
        </div>
    </div>
  `;
  code24 = `
      <div class="card">
        <h5>Offset</h5>
        <div class="grid">
            <div class="col-6 col-offset-3">
                <div class="box text-center">6</div>
            </div>
        </div>
    </div>
  `;
  code25 = `
      <div class="card">
        <div class="grid">
            <div class="col-4">
                <div class="box text-center">4</div>
            </div>
            <div class="col-4 col-offset-4">
                <div class="box text-center">4</div>
            </div>
        </div>
    </div>
  `;
  code26 = `
      <div class="card">
        <h5>Nested</h5>
        <div class="grid nested-grid">
            <div class="col-8">
                <div class="grid">
                    <div class="col-6">
                        <div class="box text-center">6</div>
                    </div>
                    <div class="col-6">
                        <div class="box text-center">6</div>
                    </div>
                    <div class="col-12">
                        <div class="box text-center">12</div>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div class="box box-stretched">4</div>
            </div>
        </div>
    </div>
  `;

  

  constructor() { }

  ngOnInit() {
  }

}
