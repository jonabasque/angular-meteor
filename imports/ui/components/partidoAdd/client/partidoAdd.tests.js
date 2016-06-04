import { name as PartidoAdd } from '../partidoAdd';
import { Partidos } from '../../../../api/partidos';

import 'angular-mocks';

describe('PartidoAdd', () => {
  beforeEach(() => {
    window.module(PartidoAdd);
  });

  describe('controller', () => {
    let controller;
    const partido = {
      name: 'Foo',
      description: 'Birthday of Foo'
    };

    beforeEach(() => {
      inject(($rootScope, $componentController) => {
        controller = $componentController(PartidoAdd, {
          $scope: $rootScope.$new(true)
        });
      });
    });

    describe('reset()', () => {
      it('should clean up partido object', () => {
        controller.partido = partido;
        controller.reset();
        expect(controller.partido).toEqual({});
      });
    });

    describe('submit()', () => {
      beforeEach(() => {
        spyOn(Partidos, 'insert');
        spyOn(controller, 'reset').and.callThrough();

        controller.partido = partido;
        controller.submit();
      });

      it('should insert a new partido', () => {
        expect(Partidos.insert).toHaveBeenCalledWith(partido);
      });

      it('should call reset()', () => {
        expect(controller.reset).toHaveBeenCalled();
      });
    });
    
  });

});
