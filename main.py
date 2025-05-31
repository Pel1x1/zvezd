class FSMError(Exception):
    def __init__(self, message):
        super().__init__(message)


class FSM:
    def __init__(self):
        self.states = {
            'F0': 'S1',
            'F1': 'S4',
            'F2': 'S3',
            'F3': 'S0',
            'F4': 'S4',
            'F5': 'S3',
            'F6': 'S2'
        }
        self.transitions = {
            'F0': {'copy': 'F6'},
            'F1': {'fetch': 'F4'},
            'F2': {'begin': 'F3', 'play': 'F6'},
            'F3': {'begin': 'F1', 'play': 'F3'},
            'F4': {'fetch': 'F0', 'copy': 'F2'},
            'F5': {'begin': 'F3', 'copy': 'F5'},
            'F6': {'copy': 'F5', 'fetch': 'F2'}
        }
        self.current_state = 'F3'
        self.transition_count = {}

    def select(self, word):
        valid_inputs = {'begin', 'fetch', 'copy', 'play'}
        if word not in valid_inputs:
            raise FSMError('unknown')
        if word not in self.transitions.get(self.current_state, {}):
            raise FSMError('unsupported')
        next_state = self.transitions[self.current_state][word]
        self._record_transition(self.current_state, next_state)
        self.current_state = next_state

    def _record_transition(self, from_state, to_state):
        edge = (from_state, to_state)
        self.transition_count[edge] = self.transition_count.get(edge, 0) + 1

    def get_output(self):
        return self.states[self.current_state]

    def seen_edge(self, from_state, to_state):
        return self.transition_count.get((from_state, to_state), 0)

    def has_max_out_edges(self):
        max_out = max(len(trans) for trans in self.transitions.values())
        current_out = len(self.transitions.get(self.current_state, {}))
        return current_out == max_out


def run_sequence(actions):
    fsm = FSM()
    for action in actions:
        fsm.select(action)
    return fsm


def test():
    sequences = [
        # Проверка начального состояния
        {'actions': [], 'expected_output': 'S0'},
        # Проверка валидных переходов и выходов
        {'actions': ['begin'], 'expected_output': 'S4'},
        {'actions': ['begin', 'fetch'], 'expected_output': 'S4'},
        {'actions': ['begin', 'fetch', 'fetch'], 'expected_output': 'S1'},
        {'actions': ['begin', 'fetch', 'copy'], 'expected_output': 'S3'},
        {'actions': ['begin', 'fetch', 'copy', 'play'],
            'expected_output': 'S2'},
        {'actions': ['begin', 'fetch', 'copy', 'play',
                     'fetch'], 'expected_output': 'S3'},
        {'actions': ['begin', 'fetch', 'copy', 'play',
                     'fetch', 'begin'], 'expected_output': 'S0'},
        {'actions': ['begin', 'fetch', 'copy', 'play', 'fetch',
                     'begin', 'play'], 'expected_output': 'S0'},
        {'actions': ['begin', 'fetch', 'fetch', 'copy'],
            'expected_output': 'S2'},
        {'actions': ['begin', 'fetch', 'fetch',
                     'copy', 'copy'], 'expected_output': 'S3'},
        {'actions': ['begin', 'fetch', 'fetch', 'copy',
                     'copy', 'copy'], 'expected_output': 'S3'},
        {'actions': ['begin', 'fetch', 'fetch', 'copy',
                     'copy', 'copy', 'begin'], 'expected_output': 'S0'},
        # Проверка количества переходов
        {'actions': ['begin', 'fetch', 'copy', 'play', 'copy', 'begin'],
         'transition_counts': {
            ('F1', 'F4'): 1, ('F4', 'F2'): 1, ('F2', 'F6'): 1,
            ('F6', 'F5'): 1, ('F5', 'F3'): 1}},
        {'actions': ['play', 'play', 'play'],
            'transition_counts': {('F3', 'F3'): 3}},
        {'actions': ['begin', 'fetch', 'copy', 'begin', 'begin',
                     'fetch', 'fetch', 'copy', 'copy'],
         'has_max_out_edges': True},
        {'actions': ['begin', 'fetch', 'copy', 'play', 'copy', 'copy', 'copy',
                     'copy'], 'transition_counts': {('F5', 'F5'): 3},
         'expected_output': 'S3'},
        {'actions': ['play', 'play', 'play', 'play', 'play'],
         'transition_counts': {
            ('F3', 'F3'): 5}, 'expected_output': 'S0'},
        # Проверка исключений
        {'actions': ['begin', 'copy'], 'expected_exception': 'unsupported'},
        {'actions': ['invalid'], 'expected_exception': 'unknown'},
        {'actions': ['play', 'fetch'], 'expected_exception': 'unsupported'},
        {'actions': ['begin', 'fetch', 'fetch', 'fetch'],
            'expected_exception': 'unsupported'},
        # Проверка текущих состояний и других свойств
        {'actions': ['begin', 'fetch', 'fetch'],
            'expected_output': 'S1', 'current_state': 'F0'},
        {'actions': ['begin', 'fetch', 'copy', 'play'],
            'expected_output': 'S2', 'current_state': 'F6'},
        {'actions': ['begin', 'fetch', 'copy'],
            'expected_output': 'S3', 'current_state': 'F2'},
        {'actions': ['begin', 'fetch'],
            'expected_output': 'S4', 'current_state': 'F4'},
        {'actions': ['begin'], 'expected_output': 'S4',
            'has_max_out_edges': False},
        {'actions': ['play'], 'expected_output': 'S0',
            'has_max_out_edges': True},
    ]

    for seq in sequences:
        fsm = FSM()
        try:
            for action in seq['actions']:
                fsm.select(action)
            if 'expected_output' in seq:
                assert fsm.get_output() == seq['expected_output']
            if 'transition_counts' in seq:
                for edge, count in seq['transition_counts'].items():
                    assert fsm.seen_edge(*edge) == count
            if 'has_max_out_edges' in seq:
                assert fsm.has_max_out_edges() == seq['has_max_out_edges']
            if 'current_state' in seq:
                assert fsm.current_state == seq['current_state']
        except FSMError as e:
            assert str(e) == seq['expected_exception']
        except AssertionError:
            print(f"Тест провалился для действий: {seq['actions']}")


def main():
    return FSM()


if __name__ == "__main__":
    test()
