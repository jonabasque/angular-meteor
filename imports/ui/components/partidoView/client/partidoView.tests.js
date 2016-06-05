import { name as PartidoView } from '../partidoView';
import { Partidos } from '../../../../api/partidos';
import 'angular-mocks';

describe('PartidoView', () => {
  beforeEach(() => {
    window.module(PartidoView);
  });

  describe('controller', () => {
    let controller;
    const partido = {
      _id: 'partidoId',
      name: 'Foo',
      description: 'Birthday of Foo'
    };

    beforeEach(() => {
      inject(($rootScope, $componentController) => {
        controller = $componentController(PartidoView, {
          $scope: $rootScope.$new(true)
        });
      });
    });

    describe('save()', () => {
      beforeEach(() => {
        spyOn(Partidos, 'update');
        controller.partido = partido;
        controller.save();
      });

      it('should update a proper partido', () => {
        expect(Partidos.update.calls.mostRecent().args[0]).toEqual({
          _id: partido._id
        });
      });

      it('should update with proper modifier', () => {
        expect(Partidos.update.calls.mostRecent().args[1]).toEqual({
          $set: {
            name: partido.name,
            description: partido.description
          }
        });
      });
    });
  });
});
