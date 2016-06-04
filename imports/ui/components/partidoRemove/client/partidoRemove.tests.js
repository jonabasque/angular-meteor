import { name as PartidoRemove } from '../partidoRemove';
import { Partidos } from '../../../../api/partidos';

import 'angular-mocks';

describe('PartidoRemove', () => {
  beforeEach(() => {
    window.module(PartidoRemove);
  });

  describe('controller', () => {
    let controller;
    const partido = {
      _id: 'partidoId'
    };

    beforeEach(() => {
      inject(($rootScope, $componentController) => {
        controller = $componentController(PartidoRemove, {
          $scope: $rootScope.$new(true)
        }, {
          partido
        });
      });
    });

    describe('remove()', () => {
      beforeEach(() => {
        spyOn(Partidos, 'remove');
        controller.remove();
      });

      it('should remove a partido', () => {
        expect(Partidos.remove).toHaveBeenCalledWith(partido._id);
      });
    });

  });

});
